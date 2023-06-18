<template>
  <VRow no-gutters class="auth-wrapper">
    <VCol lg="7" class="d-none d-md-flex">
      <div class="position-relative auth-bg w-100 h-100 m-0">
          <div class="bg-auth-img d-flex align-center justify-center">
            <VRow class="justify-center">
              <VCol cols="8" class="text-center">
                <VNodeRenderer :nodes="themeConfig.app.logo" class="me-2"/>
                <h5 class="text-h5 font-weight-bold mb-3">Forum Science & Technology</h5>
                <p class="font-weight-medium">Forum Sains dan Teknologi merupakan wadah penyebaran informasi dan diskusi mengenai kegiatan yang ada di Fakultas Sains dan Teknologi, mulai dari beasiswa yang ada untuk mahasiswa FST, seminar atau webinar, dan kegiatan lainnya yang berasal dari lingkungan FST atau kegiatan eksternal untuk mahasiswa FST.</p>
              </VCol> 
            </VRow>
          </div>
      </div>
    </VCol>

    <VCol cols="12" lg="5" class="d-flex align-center justify-center auth-bg">
        <VCard flat :max-width="500" class="mt-12 mt-sm-0 pa-4 w-100" color="black" theme="dark" rounded="xl">
          <VCardText class="mb-4 text-center">
            <h5 class="text-h5 font-weight-semibold mb-1">Welcome Back!</h5>
            <p class="mb-0">Sign in and to your account</p>
          </VCardText>
          <VCardText>
            <VForm ref="refVForm"
            @submit.prevent="onSubmit">
              <VRow>
                <!-- email -->
                <VCol cols="12">
                  <VTextField
                    v-model="email"
                    label="Email"
                    variant="outlined"
                    type="email"
                    :rules="[requiredValidator, emailValidator]"
                  />
                </VCol>
  
                <!-- password -->
                <VCol cols="12">
                  <VTextField
                    v-model="password"
                    label="Password"
                    variant="outlined"
                    :rules="[requiredValidator]"
                    :type="isPasswordVisible ? 'text' : 'password'"
                    :append-inner-icon="
                      isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'
                    "
                    @click:append-inner="isPasswordVisible = !isPasswordVisible"
                  />
  
                  <div
                    class="d-flex align-center flex-wrap justify-end mt-2 mb-4"
                  >
                    <a class="text-primary ms-2 mb-1"  style="font-size:.76rem" href="/forgot-password">
                      Forgot Password?
                    </a>
                  </div>
                  
                  <VBtn type="submit" 
                      block
                      :loading="loading"
                      class="flex-grow-1 px-md-10"
                      > Sign In </VBtn>
                      <div class="d-flex justify-center mt-2 mb-4">
                        <p class="d-block" style="font-size:.876rem">
                          <a class="text-primary ms-2 mb-1" href="/registration">
                            Create new account
                          </a>
                          I'm new here!
                        </p>
                    </div>
                </VCol>
              </VRow>
            </VForm>
          </VCardText>
        </VCard>
    </VCol>
  </VRow>
</template>

<script setup>

import { useAppAbility } from '@/plugins/casl/useAppAbility';
import axios from '@axios';
import { VNodeRenderer } from '@layouts/components/VNodeRenderer';
import { themeConfig } from '@themeConfig';
import { emailValidator, requiredValidator } from "@validators";

const isPasswordVisible = ref(false)
const route = useRoute()
const router = useRouter()
const ability = useAppAbility()

const errors = ref({
  email: undefined,
  password: undefined,
})

const refVForm = ref()
const email = ref('via@mhs.uinjkt.ac.id')
const password = ref('123456')
const rememberMe = ref(false)
const loading = ref(false)

const login = () => {
  loading.value = true
  axios.post('/auth/login', {
    email: email.value,
    password: password.value,
  }).then(r => {
    const { accessToken, userData, userAbilities } = r.data

    localStorage.setItem('userAbilities', JSON.stringify(userAbilities))
    ability.update(userAbilities)
    localStorage.setItem('userData', JSON.stringify(userData))
    localStorage.setItem('accessToken', JSON.stringify(accessToken))
    setTimeout(function() {
      loading.value = false
      // Redirect to `to` query if exist or redirect to index route
      router.replace(route.query.to ? String(route.query.to) : '/')
    }, 3000);
  }).catch(e => {
    const { errors: formErrors } = e.response.data

    loading.value = false
    errors.value = formErrors
    console.error(e.response.data)
  })
}

const onSubmit = () => {
  refVForm.value?.validate().then(({ valid: isValid }) => {
    if (isValid)
      login()
  })
}

</script>


<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";

.auth-bg {
  background-color: #003C60 !important;
}

.bg-auth-img {
  height: 100%;
  width: 100%;
  padding: 40px;
  background: linear-gradient(180deg,rgba(255, 255, 255, 0.7) 20%,rgba(255, 255, 255, 0) 100%),url('@images/background/background.jpg');
  background-size: cover;
}
</style>

<route lang="yaml">
meta:
  layout: blank
  action: read
  subject: Auth
  redirectIfLoggedIn: true
</route>
