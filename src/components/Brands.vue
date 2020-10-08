<template>
    <v-row class="backgroundBrands">
        <v-col md="12" sm="12" lg="12" xsm="12" class="text-rigth">
            <span class="titleBrands">BRANDS</span>
            <div class="positionButton">
                <v-btn class="ma-2" outlined color="indigo" disabled>
                    <vue-fontawesome icon="chevron-left" size="1"></vue-fontawesome>
                </v-btn>&nbsp;
                <v-btn class="ma-2" outlined color="indigo" disabled>
                    <vue-fontawesome icon="chevron-right" size="1"></vue-fontawesome>
                </v-btn>
            </div>
        </v-col>
        <v-col md="12" sm="12" lg="12" xsm="12">
            <v-row>
                <v-col md="2" sm="2" lg="2" xsm="2"></v-col>
                <v-col md="2" sm="2" lg="2" xsm="2" v-for="(brand, index) in brandsItems" :key="index">
                    <v-img :src="brand.logo"/>
                </v-col>
                <v-col md="2" sm="2" lg="2" xsm="2"></v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: 'Brands',
        data(){
            return{
                brandsItems: [
                    { logo: '/img/logo1.jpg'},
                    { logo: '/img/logo2.jpg'},
                    { logo: '/img/logo3.jpg'},
                    { logo: '/img/logo4.jpg'},
                ]
            }
        }
    }
</script>