<template>
  <div>
    <p class="text-2xl mb-6">Lomba</p>
    <VRow>
      <VCol cols="12" v-for="(data, index) in listData" :key="index">
        <VCard>
          <VRow no-gutters>
            <VCol cols="12" sm="8" md="12" lg="7" order="2" order-lg="1">
              <VCardItem>
                <div class="d-flex align-center">
                  <VAvatar class="me-3">
                    <VImg :src="avatar1" />
                  </VAvatar>
                  <div class="title">
                    <VCardTitle>{{ data.title }}</VCardTitle>
                    <VCardSubTitle>{{ data.subtitle }}</VCardSubTitle>
                  </div>
                </div>
              </VCardItem>

              <VCardText>
                <div v-html="data.text" class="text-inner"></div>
              </VCardText>

              <VCardText>
                <VDivider />
              </VCardText>
              <VCardText class="d-flex align-center">
                  <VBtn
                      icon
                      variant="text"
                      color="dark"
                    >
                    <VIcon color="dark" icon="icon-park-solid:like" size="22" />
                </VBtn>
                  <VBtn
                        icon
                        variant="text"
                        color="dark"
                      >
                      <VIcon color="dark" icon="iconamoon:comment-dots-bold" size="22" />
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
              <div v-html="data.text2"  class="text-inner"> </div>
            </VCol>
          </VRow>
        </VCard>
      </VCol>
    </VRow>
  </div>

</template>

<script setup>

import avatar1 from '@images/avatars/ava-si-3.png';

const text = `<p>✨ Hadiah ✨</p>
              <p>
                Juara Pertama: Rp. 1.500.000
              </p>
              <p>
                Juara Kedua: Rp. 1.250.000
              </p>
              <p>
                Juara Ketiga: Rp. 1.000.000
              </p>
              <p>
                Honorable Mention: Rp. 500.000
              </p>
              <p>📃Ruang Lingkup📃</p>
              <ul>
                <li>
                  Software Engineering and Information Sciences
                </li>
                <li>
                  Computational Intelligence and Optimization
                </li>
                <li>
                  Computer System and Networks
                </li>
                <li>
                  Innovative Computer Technology in Veterinary, Fishery and Agromaritime, Animal Sciences, Forestry and Agricultural Engineering.
                </li>
              </ul>`
const text2 = `<b>Registrasi (Judul): 10 Maret 2023</b>
                <b>Deadline Artikel: 31 Maret 2023</b>
                <b>Pengumuman Pemenang: 14 April 2023</b>
                <b>Publikasi: Mei 2023</b>
                <p>📎 Link Panduan Penulisan JIKA <br><a href="#">http://bit.ly/JIKA_pedoman_penulisan</a></p>
                <p>
                  📎 Link Template JIKA <br><a href="#">http://bit.ly/JIKA_template</a>
                </p>
                <p>
                  📎 Submit naskah ke <br><a href="#">http://bit.ly/WritingCompetitionJIKA</a>
                </p>
                <p>
                📧 E-mail : jika@apps.ipb.ac.id
                </p>
                <p>
                📱CP: 0898-1064-804 (Aini)
                </p>
                <br><br>
                <p>With love,Pusat Karier UIN Jakarta</p>
                <a href="#">#PusatKarier#UINJakarta#pelatihan #kampus #digitalmarketing #event #mahasiswa </a>`
const listData =[{
  title : 'Writing Competition (Lomba Karya Tulis Agri-Informatika',
  subtitle : 'Himpunan Mahasiswa Sistem Informasi (HIMSI)',
    group : 'lomba',
    text : text,
    text2 : text2,
}] 
</script>

<style lang="scss">
.text-inner p {
  margin: 0;
  padding: 0;
}
</style>
