<template>
 <v-carousel cycle show-arrows-on-hover>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    >
      <div class="textCarousel">
        <p class="titleCarousel">{{item.name}}</p>
        <div class="contentOferta">
          <v-row>
            <v-col md="9">
              <div class="oferta">
                {{item.oferta}}
              </div>
            </v-col>
            <v-col md="3">
              <div class="discount">
                {{item.discount}}
              </div>
            </v-col>
          </v-row>
        </div>
        <div class="comprar">
          {{item.comprar}}
        </div>
        <div class="buttons">
          <v-row>
            <v-col md="6">
              <v-btn class="buttonShop">
                SHOP now
              </v-btn>
            </v-col>
            <v-col md="6">
              <v-btn class="buttonShop">
                from ${{item.price}}
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    name: 'Carousel',
    data () {
      return {
        items: [
          {
            src: require('@/assets/img/1.jpg'), name: 'TULIPS', oferta: 'SALE', discount: '50% OFF', comprar: 'SHOP NOW', price: '15'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',  name: 'TULIPS', oferta: 'SALE', discount: '50% OFF', comprar: 'SHOP NOW', price: '20'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',  name: 'TULIPS', oferta: 'SALE', discount: '50% OFF', comprar: 'SHOP NOW', price: '33'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',  name: 'TULIPS', oferta: 'SALE', discount: '50% OFF', comprar: 'SHOP NOW', price: '28'
          },
        ],
      }
    },
  }
</script>