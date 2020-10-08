<template>
    <v-row>
        <v-col md="6">
            <v-card class="mx-auto">
                <v-img class="white--text align-end" :src="src1"></v-img>
                <span class="splash1">
                    SPLASH OF SUMMER<br/>
                    25% OFF<br>
                    <v-btn class="buttonShop buttoFirst">
                        SHOP NOW
                    </v-btn>
                </span>
            </v-card>
        </v-col>
        <v-col md="6">
            <v-card class="mx-auto">
                <v-img class="white--text align-end" :src="src2">
                </v-img>
                <span class="splash2">
                    SPLASH OF SUMMER<br/>
                    25% OFF<br>
                    <v-btn class="buttonShop buttoFirst">
                        SHOP NOW
                    </v-btn>
                </span>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        name: 'Splash',
        data(){
            return{
                src1: '/img/5.jpg',
                src2: '/img/6.jpg'
            }
        }
    }
</script>