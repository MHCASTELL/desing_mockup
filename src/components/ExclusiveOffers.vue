<template>
    <v-row>
        <v-col md="2"></v-col>
        <v-col md="2" v-for="(exclusive, index) in items" :key="index">
            <v-card class="mx-auto" max-width="auto" height="90px" outlined>
                <v-list-item three-line>
                    <v-list-item-content>
                        <v-img :src="exclusive.img" class="cardNew"/>
                    </v-list-item-content>
                    <span class="titleExclusive">
                        {{exclusive.title}}<br>
                        ${{exclusive.price}}
                    </span>
                    <span class="buttonsExclusive">
                        <vue-fontawesome icon="heart" size="1"></vue-fontawesome>&nbsp; &nbsp;
                        <vue-fontawesome icon="shopping-cart" size="1"></vue-fontawesome>
                    </span>
                </v-list-item>
            </v-card>
        </v-col>
        <v-col md="2">
            <v-card class="mx-auto" max-width="auto" outlined>
                <v-list-item three-line>
                    <span class="titleExclusiveGO">
                        Special Offer Limited<br>
                        Time Only
                    </span>
                    <span class="buttonsExclusiveGO">
                        <v-btn class="buttonShop buttoFirst">
                            SHOP NOW
                        </v-btn>
                    </span>
                </v-list-item>
            </v-card>
        </v-col>
        <v-col md="2"></v-col>
    </v-row>
</template>

<script>
    export default {
        name: 'ExclusiveOffers',
        data(){
            return {
                items: [
                    {
                        img: '/img/Rectangle1.png', title: 'Be Happy Flower Bouquet', price: 30
                    },
                    {
                        img: '/img/Rectangle2.png', title: 'Delightfull Fresh Bouquet', price: 42
                    },
                    {
                        img: '/img/Rectangle3.png', title: 'Rose and Lily Romance', price: 37
                    }
                ],
                img: '/img/Rectangle1.png'
            }
        }
    }
</script>