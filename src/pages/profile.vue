<script setup>

import Helper from '@/helpers/helper';
import avatar3 from '@images/avatars/ava-si-7.png';
const loading = ref(null)
const profil = {
  photo : avatar3,
  name : "Siti Saluiatu Rohmah",
  fakultas : "Sains dan Teknologi",
  email : "via@mhs.uinjkt.ac.id",
  phone : "085894883532",
  nationality : "Indonesia",
  nim : "11200930000079",
  prodi : "Sistem Informasi",
  address : "Jalan Andara No. 17, Cilandak, Pondok Labu, DKI Jakarta",
}

const clickSuccess = () => {
  
}
</script>

<template>
    <section>
        <VRow class="justify-center">
            <VCol cols="12" md="5">
                <VCard>
                    <div class="loader-display" v-if="loading">
                        <div class="d-flex justify-center align-center">
                            <VProgressLinear indeterminate color="primary" :height="5" />
                        </div>
                    </div>
                    <VCardText>
                      <p class="text-center text-2xl font-weight-bold text-dark ma-0 mb-3">
                          My Profile
                      </p>
                      <div class="d-flex justify-center">
                        <v-avatar class="mb-3" color="grey" size="150" rounded="50">
                            <v-img cover :src="profil.photo"></v-img>
                        </v-avatar>
                      </div>
                        <VList class="card-list text-medium-emphasis">
    
                            <VListItem style="padding-bottom:15px !important">
                                <VListItemTitle>
                                    <span class="font-weight-normal text-xs me-1">Full Name :</span>
                                </VListItemTitle>
                                <VListItemSubtitle style="-webkit-box-orient: horizontal; opacity:1;">
                                    <p class="font-weight-semibold ma-0 pa-0">{{ profil?.name }}</p>
                                </VListItemSubtitle>
                            </VListItem>
    
                            <VListItem style="padding-bottom:15px !important">
                                <VListItemTitle>
                                    <span class="font-weight-normal text-xs me-1">NIM :</span>
                                </VListItemTitle>
                                <VListItemSubtitle style="-webkit-box-orient: horizontal; opacity:1;">
                                    <p class="font-weight-semibold ma-0 pa-0">{{ Helper.valueCheck(profil?.nim) }}</p>
                                </VListItemSubtitle>
                            </VListItem>
    
                            <VListItem style="padding-bottom:15px !important">
                                <VListItemTitle>
                                    <span class="font-weight-normal text-xs me-1">Study Program :</span>
                                </VListItemTitle>
                                <VListItemSubtitle style="-webkit-box-orient: horizontal; opacity:1;">
                                    <p class="font-weight-semibold ma-0 pa-0">{{ Helper.valueCheck(profil?.prodi) }}</p>
                                </VListItemSubtitle>
                            </VListItem>
    
                            <VListItem style="padding-bottom:15px !important">
                                <VListItemTitle>
                                    <span class="font-weight-normal text-xs me-1">Faculty :</span>
                                </VListItemTitle>
                                <VListItemSubtitle style="-webkit-box-orient: horizontal; opacity:1;">
                                    <p class="font-weight-semibold ma-0 pa-0">{{ Helper.valueCheck(profil?.fakultas) }}</p>
                                </VListItemSubtitle>
                            </VListItem>
    
                            <VListItem style="padding-bottom:15px !important">
                                <VListItemTitle>
                                    <span class="font-weight-normal text-xs me-1">Phone Number :</span>
                                </VListItemTitle>
                                <VListItemSubtitle style="-webkit-box-orient: horizontal; opacity:1;">
                                    <p class="font-weight-semibold ma-0 pa-0">{{ Helper.valueCheck(profil?.phone) }}</p>
                                </VListItemSubtitle>
                            </VListItem>
    
                            <VListItem style="padding-bottom:15px !important">
                                <VListItemTitle>
                                    <span class="font-weight-normal text-xs me-1">Email :</span>
                                </VListItemTitle>
                                <VListItemSubtitle style="-webkit-box-orient: horizontal; opacity:1;">
                                    <p class="font-weight-semibold ma-0 pa-0">{{ profil?.email }}</p>
                                </VListItemSubtitle>
                            </VListItem>
    
                            <VListItem style="padding-bottom:15px !important">
                                <VListItemTitle>
                                    <span class="font-weight-normal text-xs me-1">Address :</span>
                                </VListItemTitle>
                                <VListItemSubtitle style="-webkit-box-orient: horizontal; opacity:1;">
                                    <p class="font-weight-semibold ma-0 pa-0">{{ Helper.valueCheck(profil?.address) }}</p>
                                </VListItemSubtitle>
                            </VListItem>

                            <VListItem style="padding-bottom:15px !important">
                                <VListItemTitle>
                                    <span class="font-weight-normal text-xs me-1">Nationality :</span>
                                </VListItemTitle>
                                <VListItemSubtitle style="-webkit-box-orient: horizontal; opacity:1;">
                                    <p class="font-weight-semibold ma-0 pa-0">{{ Helper.valueCheck(profil?.nationality) }}</p>
                                </VListItemSubtitle>
                            </VListItem>
    
                        </VList>
    
                    </VCardText>
                </VCard>
            </VCol>
    
            <!-- <VCol cols="12" md="3" class="d-print-none">
                <VCard class="mb-6">
                    <div class="loader-display" v-if="loading">
                        <div class="d-flex justify-center align-center">
                            <VProgressLinear indeterminate color="primary" :height="5" />
                        </div>
                    </div>
                    <VCardText>
                        <ModalChangeFoto @onSubmitSuccess="clickSuccess" />
                        <ModalChangePassword @onSubmitSuccess="clickSuccess" />
                    </VCardText>
                </VCard>
            </VCol> -->
        </VRow>
    
    </section>
</template>

<style lang="scss">
@media print {
    .v-application {
        background: none !important;
    }
    @page {
        margin: 0;
        size: auto;
    }
    .layout-page-content,
    .v-row,
    .v-col-md-9 {
        padding: 0;
        margin: 0;
    }
    .product-buy-now {
        display: none;
    }
    .v-navigation-drawer,
    .layout-vertical-nav,
    .app-customizer-toggler,
    .layout-footer,
    .layout-navbar,
    .layout-navbar-and-nav-container {
        display: none;
    }
    .v-card {
        box-shadow: none !important;
        .print-row {
            flex-direction: row !important;
        }
    }
    .layout-content-wrapper {
        padding-inline-start: 0 !important;
    }
}
</style>

