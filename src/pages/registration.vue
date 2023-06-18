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
        <VCard flat :max-width="500" class="mt-12 mt-sm-0 pa-4 w-100"  color="black" theme="dark" rounded="xl">
          <VCardText class="mb-4 text-center">
            <h5 class="text-h5 font-weight-semibold mb-1">Create Account!</h5>
            <p class="mb-0">Sign up and start your journey here.</p>
          </VCardText>
          <VCardText>
            <VForm ref="refVForm"
            @submit.prevent="onSubmit">
              <VRow>
                <VCol cols="12">
                  <v-text-field v-model="form.name" :rules="[rules.required, rules.counter]" counter maxlength="20" label="Full Name" variant="outlined" clearable></v-text-field>
                </VCol>
                <VCol cols="12">
                  <v-text-field v-model="form.StudentId" :rules="[rules.required, rules.onlyNumber]" label="Student Id" variant="outlined" clearable></v-text-field>
                </VCol>
                <VCol cols="12">
                  <v-text-field v-model="form.StudentEmail" :rules="[rules.required, rules.email]" label="Student Email" variant="outlined" clearable></v-text-field>
                </VCol>
                <VCol cols="12">
                  <v-text-field v-model="form.Password" type="password" :rules="[rules.required, rules.Password]" label="Password" variant="outlined" clearable></v-text-field>
                </VCol>
                <VCol cols="12">
                  <v-text-field v-model="form.ConfirmPassword" type="password" :rules="[rules.required, cekpassword]" label="Confirm Password" variant="outlined" clearable></v-text-field>
                </VCol>
                <VCol cols="12">
                  <v-checkbox v-model="form.termandcondition" color="secondary" label="I agree to site terms and conditions"></v-checkbox>
                </VCol>
  
                <VCol cols="12">
                  <div
                    class="d-flex align-center flex-wrap justify-end mt-2 mb-4"
                  >
                  </div>
                  
                  <VBtn type="submit" 
                      block
                      :loading="loading"
                      class="flex-grow-1 px-md-10"
                      > Sign Up </VBtn>
                      <div class="mt-2 mb-4">
                        <p class="text-center mb-2 pa-0" style="font-size:.867rem">Already have an account, <router-link to="/login">Log In</router-link></p>
                        <p class="text-center ma-0 pa-0" style="font-size:.7rem">By signing up, you agree to our <router-link to="/">Terms of Use</router-link> and <router-link to="/">Privacy Policy</router-link></p>
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

<script>
export default {
    data: () => ({
        loading: false,
        message: null,
        form: {
            name: "",
            StudentId: "",
            StudentEmail: "",
            Password: "",
            ConfirmPassword: "",
            termandcondition: false
        },
        rules: {
            required: (value) => !!value || "Required.",
            counter: (value) => value.length <= 20 || "Max 20 characters",
            email: (value) => {
                const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return pattern.test(value) || "Invalid your e-mail, please input email UIN.";
            },
            onlyNumber: (value) => {
                const pattern = /^(0|[1-9][0-9]*)$/;
                return pattern.test(value) || "Input Your NIM";
            },
            Password: (value) => {
                const containsUppercase = /[A-Z]/.test(value);
                const containsLowercase = /[a-z]/.test(value);
                const containsNumber = /[0-9]/.test(value);
                const containsSpecial = /[#?!@$%^&*-]/.test(value);
                return (
                    (containsUppercase && containsLowercase && containsNumber && containsSpecial) ||
                    "Password"
                );
            },
        },
    }),
    mounted() {},
    methods: {
        submit() {},
    },
    computed: {
        cekpassword() {
            return this.form.Password === this.form.ConfirmPassword || "password don't match";
        },
    },
};
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
