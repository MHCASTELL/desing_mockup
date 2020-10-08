<template>
  <v-card flat class="headerDesingMockup">
    <div class="freeShipping">
      <v-row>
        <v-col md="1" sm="12"></v-col>
        <v-col md="10" sm="12">
          <v-row>
            <v-col md="9" sm="12">
              <a href="#"><vue-fontawesome icon="truck" size="1" color="white"></vue-fontawesome> FreeShipping on Order above $199</a>
            </v-col>
            <v-col md="1" sm="6">
              <a href="#"><vue-fontawesome icon="user" size="1" color="white"></vue-fontawesome> My accout</a>
            </v-col>
            <v-col md="2" sm="6">
              <a href="#">Login</a> / <a href="#">Register</a>
            </v-col>
          </v-row>
        </v-col>
        <v-col md="1" sm="12"></v-col>
      </v-row>
    </div>
    <div>
      <v-row>
        <v-col md="1"></v-col>
        <v-col md="10">
          <v-row>
            <v-col md="3" sm="6">
              <img src="@/assets/img/logo.png" width="70%" height="80%"/>
            </v-col>
            <v-col md="7" sm="6">
              <form action="#" class="busqueda">
                  <input type="text" placeholder="Search from entire store..."/>
                  <button type="submit"><vue-fontawesome icon="search" size="1"></vue-fontawesome></button>
                  <select name="select">
                    <option value="value1" selected>All Categories</option> 
                    <option value="value2">Men's</option>
                    <option value="value3">Woman</option>
                  </select>
              </form>
            </v-col>
            <v-col md="1" sm="10">
              <div class="wishList">
                  <vue-fontawesome icon="heart" class="iconList"></vue-fontawesome> WishList <vue-fontawesome icon="caret-down" ></vue-fontawesome>
              </div>
            </v-col>
            <v-col md="1" sm="2">
              <div class="iconoCartContent">
                <div class="counterCart">
                  <span>{{products}}</span>
                </div>
                <div class="iconoCart">
                  <vue-fontawesome icon="shopping-bag" size="1"></vue-fontawesome>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
        <v-col md="1"></v-col>
      </v-row>
    </div>
    <div  class="fontColor menuBackgroud">
      <v-row>
        <v-col md="1" sm="12">
        </v-col>
        <v-col md="8" sm="12">
          <v-tabs align-with-title>
            <v-tab class="fontMenu">Home</v-tab>
            <v-tab class="fontMenu">Shop</v-tab>
            <v-tab class="fontMenu">New Arrivals</v-tab>
            <v-tab class="fontMenu">Products</v-tab>
            <v-tab class="fontMenu">Brand</v-tab>
            <v-tab class="fontMenu">Blog</v-tab>
            <v-tab class="fontMenu">Contact</v-tab>
          </v-tabs>
        </v-col>
        <v-col md="2" sm="12" class="headerDesingMockup">
          <CarShop></CarShop>
        </v-col>
        <v-col md="1" sm="12"></v-col>
      </v-row>
    </div>
    <Carousel></Carousel>
    <Flowers></Flowers>
    <Splash></Splash>
    <h2 class="titles">
        BEST SELLING FLOWERS & GIFTS
    </h2>
    <BestFlowers :article-best-flowers="bestSellingProductsFinal" v-if="bestSellingProductsFinal.length"></BestFlowers>
    <h2 class="titles">
        EXCLUSIVE OFFERS
    </h2>
    <ExclusiveOffers></ExclusiveOffers>
    <Brands></Brands>
    <Footer></Footer>
  </v-card>
</template>

<script>
  import axios from 'axios';
  import { store } from './store/index';
  export default {
    name: "App",
    data() {
      return {
        drawer: true,
        output: null,
        bestSellingProducts: [],
        bestSellingProductsResena: [],
        bestSellingProductsFinal: [],
        products: 0
      };
    },
    components: {
    },
    created() {
        !!store.getters.getItems ? this.products = store.getters.getItems.length : this.products = [] ;
        axios.get('/247a3a4bc0b8ac0a0c36').then(
          response =>{
            this.bestSellingProducts = [];
            this.bestSellingProducts = response.data.products;
            this.bestSellingProductsResena = response.data.resena;
            this.bestSellingProducts.forEach(article =>{
              let sumaScore = 0;
              let total = 0;
              this.bestSellingProductsResena.forEach(score =>{
                if(article.id == score.id){
                  sumaScore += score.stars;
                  total++;
                }
              })
              let finalRaking = sumaScore == 0 ? 0 : sumaScore / total;
              article.descuentoActual = -(Math.trunc(((article.specialPrice / article.price ) - 1) * 100))
              article.finalRaking = finalRaking;
              this.bestSellingProductsFinal.push(article);
            });
          }
        ).catch(
          error =>{
            console.error('Error', error);
          }
        )
    },
    methods: {
    }
  };
</script>
