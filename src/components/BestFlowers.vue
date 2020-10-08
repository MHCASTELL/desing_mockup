<template>
    <v-row>
        <v-col md="12" sm="12" lg="12" xsm="12" class="text-rigth">
            <div class="positionButton">
                <v-btn class="ma-2" outlined color="indigo" :disabled="disableBack" @click="backArticle">
                    <vue-fontawesome icon="chevron-left" size="1"></vue-fontawesome>
                </v-btn>&nbsp;
                <v-btn class="ma-2" outlined color="indigo" :disabled="disableNext" @click="nextArticle">
                    <vue-fontawesome icon="chevron-right" size="1"></vue-fontawesome>
                </v-btn>
            </div>
        </v-col>
        <v-col md="2"></v-col>
        <v-col md="2" v-for="(bestFlower, index) in forPaginationarticle" :key="index">
            <v-card class="mx-auto">
                <v-img class="white--text align-end" height="280px" :src="bestFlower.photo"></v-img>
                <span class="productDescount">
                    {{bestFlower.descuentoActual}}%
                </span>
                <v-row>
                    <v-col md="9">
                        <span class="titleBest">
                            {{bestFlower.name}}
                        </span><br>
                        <span class="subTitleBest">
                            {{bestFlower.categorie}}
                        </span>
                    </v-col>
                    <v-col md="3">
                        <span class="precioBest">
                            ${{bestFlower.specialPrice}}
                        </span><br>
                        <span class="originalPrecioBest">
                            ${{bestFlower.price}}
                        </span>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col md="6">
                        <span class="scoreBest">
                            <span v-for="score in 5" :key="score">
                                <vue-fontawesome icon="star" size="1" v-if="score < bestFlower.finalRaking"></vue-fontawesome>
                                <vue-fontawesome icon="star-o" size="1" v-else></vue-fontawesome>
                            </span>
                        </span>
                    </v-col>
                    <v-col md="6">
                        <v-btn outlined color="indigo" class="buttonAdd" @click="addToCart(bestFlower)">
                            Add To Cart
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card>
        </v-col>
        <v-col md="2"></v-col>
    </v-row>
</template>

<script>
    import CartShop from './CarShop.vue';
    import { store } from '../store/index';
    export default {
        props: [ 'articleBestFlowers' ],
        name: 'BestFlowers',
        created(){
            this.firstClick = 0;
            this.endFirst = 4;
            this.articleBestFlowers.length <= 4 ? this.disableNext = true : this.disableNext = false;
            this.forPaginationarticle = []; 
            this.forPaginationarticle = this.articleBestFlowers.slice(this.firstClick, this.endFirst);
        },
        data(){
            return{
                disableNext: true,
                disableBack: true,
                forPaginationarticle: [],
                firstClick: 0,
                endFirst: 4,
                cart: []
            }
        },
        methods:{
            nextArticle(){
                this.firstClick++;
                this.forPaginationarticle = [];
                this.forPaginationarticle = this.articleBestFlowers.slice(this.firstClick, this.endFirst++);
                this.endFirst == this.articleBestFlowers.length ? this.disableNext = true : this.disableNext = false;
                this.disableBack = false;
            },
            backArticle(){
                this.firstClick--;
                this.endFirst--;
                this.forPaginationarticle= [];
                this.forPaginationarticle = this.articleBestFlowers.slice(this.firstClick, this.endFirst);
                this.endFirst == this.articleBestFlowers.length ? this.disableNext = true : this.disableNext = false;
                this.firstClick == 0 ? this.disableBack = true : this.disableBack = false;
            },
            addToCart: function(item){
                let temp = [];
                temp = !!JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : [];
                temp.push(item);
                //localStorage.setItem('cart', JSON.stringify(temp));
                let total = 0;
                let productos = 0;
                temp.forEach(function (articulo, index){
                    productos = index;
                    total = total + articulo.specialPrice;
                })
                productos+1;
                store.dispatch("saveItems", temp);
                CartShop.updateValue();
                location.reload();
            }
        },
    }
</script>