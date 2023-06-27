<template>
  <div>
    <p class="text-2xl mb-6">Workshop</p>
    <VRow>
      <VCol cols="12" v-for="(data, index) in listData" :key="index">
        <VCard>
          <VRow no-gutters>
            <VCol cols="12">
              <VCardItem>
                <div class="d-flex align-center">
                  <VAvatar class="me-3">
                    <VImg :src="data.img" />
                  </VAvatar>
                  <div class="title">
                    <VCardTitle>{{ data.title }}</VCardTitle>
                    <v-card-subtitle>{{ data?.subtitle }}</v-card-subtitle>
                  </div>
                </div>
              </VCardItem>
            </VCol>
          </VRow>
          <VRow no-gutters>
            <VCol cols="12" sm="8" md="12" lg="7" order="2" order-lg="1">
              <VCardText>
                <div v-html="data.text" class="text-inner"></div>
              </VCardText>

              <VCardText>
                <VDivider />
              </VCardText>
              <VCardText class="d-flex align-center">
                <VBtn icon variant="text" color="dark">
                  <VIcon color="dark" icon="icon-park-solid:like" size="22" />
                </VBtn>
                <VBtn icon variant="text" color="dark">
                  <VIcon
                    color="dark"
                    icon="iconamoon:comment-dots-bold"
                    size="22"
                  />
                </VBtn>
              </VCardText>
            </VCol>

            <VCol
              cols="12"
              sm="4"
              md="12"
              lg="5"
              order="1"
              order-lg="2"
              class="pa-10"
            >
              <div v-html="data.text2" class="text-inner"></div>
            </VCol>
          </VRow>
        </VCard>
      </VCol>
    </VRow>
  </div>
</template>

<script setup>
import axios from "@axios";
import avatar1 from "@images/avatars/ava-si-3.png";

const tag = ref("workshop");
const searchQuery = ref("");
const listData = ref([]);

const fetchArticle = () => {
  return axios
    .get("/pages/article", { params: { q: searchQuery.value, tag: tag.value } })
    .then((response) => {
      listData.value = response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

watch(searchQuery, fetchArticle, { immediate: true });
</script>

<style lang="scss">
.text-inner p {
  margin: 0;
  padding: 0;
}
</style>
