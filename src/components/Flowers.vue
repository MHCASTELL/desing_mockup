<template>
    <v-row>
        <v-col md="4" v-for="(flower, index) in itemsFlowers" :key="index" class="flowers">
            <v-card class="mx-auto">
                <v-img class="white--text align-end" height="300px" :src="flower.src">
                </v-img>
                <span v-bind:class="'flower'+index">
                    <p v-bind:class="'titleFlower'+index">{{flower.title}}</p>
                    <p v-bind:class="'legendFlower'+index">{{flower.legend}}</p>
                    <p v-bind:class="'subLegendFlower'+index">{{flower.sublegend}}</p>
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
        name: 'Flowers',
        data (){
            return{
                itemsFlowers: [
                    {
                        src: '/img/2.jpg', title: 'Fast Same day Delivery', legend: 'BIRTHDAY FLOWERS', sublegend: 'Gerbera'
                    },
                    {
                        src: '/img/3.jpg', title: 'V7 Digital Photo Printing', legend: 'PROTECTIVE PREVENTATIVE MAINTENANCE', sublegend: 'On orders over $99'
                    },
                    {
                        src: '/img/4.jpg', title: 'Rose', legend: 'FLOWER BOUQUET', sublegend: '50% OFF'
                    },
                ],
            }
        }
    }
</script>