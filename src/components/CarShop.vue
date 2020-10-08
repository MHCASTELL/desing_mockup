<template>
    <div class="carShop">
        <ul>
            <li>
                <span class="iconoCarro" v-if="noVisible">
                    <vue-fontawesome icon="shopping-bag" size="1"></vue-fontawesome>
                    Cart Items: ({{productos}})<br>
                    Total: ${{total}}
                </span>
                <a href="#">
                    
                </a>
                <ul v-if="noVisible">
                    <li v-for="(articulo, index) in compra" :key="index">
                        <div class="containerDescription">
                            <span class="nameProduct deleteProducto"  @click="deleteItem(articulo, index)">{{articulo.name}}</span>
                            <span class="priceNormal">${{articulo.price}}</span>
                            <span class="specialProduct">${{articulo.specialPrice}}</span>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    import { store } from '../store/index';
  export default {
    name: 'CarShop',
    mounted(){
        if(!!JSON.parse(localStorage.getItem('cart'))){
            this.compra = JSON.parse(localStorage.getItem('cart'));
            let total = 0;
            let productos = 0;
            this.compra.forEach(function (articulo, index){
                productos = index;
                total = total + articulo.specialPrice;
            })
            this.total = total;
            this.productos = this.compra.length <= 0 ? 0 :  productos+1;
        }else{
            this.compra = [];
            this.total = 0;
            this.productos = 0;
        }
    },
    data (){
        return{
            compra: [],
            total: 0,
            productos: 0,
            noVisible: true
        }
    },
    methods: {
        deleteItem(articulo, index){
            this.compra.splice(index, 1);
            let total = 0;
            let productos = 0;
            this.compra.forEach(function (articulo, index){
                productos = index;
                total = total + articulo.specialPrice;
            })
            this.total = total;
            this.productos = this.compra.length <= 0? 0 : productos+1;
            localStorage.setItem('cart', JSON.stringify(this.compra));
            location.reload();
        }
    },
    updateValue: function () {
        this.noVisible = false;
        if(!!store.getters.getItems){
            let total = 0;
            let productos = 0;
            this.compra = store.getters.getItems;
            store.getters.getItems.forEach(function (articulo, index){
                productos = index;
                total = total + articulo.specialPrice;
            })
            productos+1;
            this.total = total;
            this.productos = productos;
        }
    }
  }
</script>