<template>
  <v-footer dark padless>
    <v-card class="flex" flat tile>
      <v-card-title class="teal colorFirstFooter">
        <v-row>
            <v-col md="2" sm="2" lg="2" xsm="2"></v-col>
            <v-col md="2" sm="2" lg="2" xsm="2">
                <v-img :src="logo" /><br>
                <p>
                    Great Range Of Laptops For Your Everday
                    Essential w / Intel &reg; Core &trade;. Same Day
                    Shipment - Cash On Delivery - EMI Options
                    India's No.1 Most Trusted Technology
                    Brand in 2015
                </p><br>
                <v-divider></v-divider>
                <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-subtitle>
                            <vue-fontawesome icon="map-marker" size="1" class="iconsFooter"></vue-fontawesome> 321, Ramis Gandour Colony, District 9 Florida
                        </v-list-item-subtitle>
                        <v-list-item-subtitle>
                            <vue-fontawesome icon="phone" size="1" class="iconsFooter"></vue-fontawesome> <a class="aFooter" href="tel:52-3314-0095-22">33-14-00-95-22</a>
                        </v-list-item-subtitle>
                        <v-list-item-subtitle>
                            <vue-fontawesome icon="envelope" size="1" class="iconsFooter"></vue-fontawesome> <a class="aFooter" href="mailto:mcastell90@gmail.com">mcastell90@gmail.com</a>
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-col>
            <v-col md="2" sm="2" lg="2" xsm="2">
                <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title class="title">COLLECTIONS</v-list-item-title>
                        <v-list-item-subtitle class="itemlist"><a href="#" class="aFooterSec">Summer 2017</a></v-list-item-subtitle>
                        <v-list-item-subtitle class="itemlist"><a href="#" class="aFooterSec">Women's Dress</a></v-list-item-subtitle>
                        <v-list-item-subtitle class="itemlist"><a href="#" class="aFooterSec">Women's Jackets</a></v-list-item-subtitle>
                        <v-list-item-subtitle class="itemlist"><a href="#" class="aFooterSec">Men's Sweats Shirts</a></v-list-item-subtitle>
                        <v-list-item-subtitle class="itemlist"><a href="#" class="aFooterSec">Men's Dress</a></v-list-item-subtitle>
                        <v-list-item-subtitle class="itemlist"><a href="#" class="aFooterSec">Accessories</a></v-list-item-subtitle>
                        <v-list-item-subtitle class="itemlist"><a href="#" class="aFooterSec">Travel Bags</a></v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-col>
            <v-col md="2" sm="2" lg="2" xsm="2">
                <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title class="title">CUSTOMERE CARE</v-list-item-title>
                        <v-list-item-subtitle class="itemlist"><a href="#" class="aFooterSec">Order Tracking</a></v-list-item-subtitle>
                        <v-list-item-subtitle class="itemlist"><a href="#" class="aFooterSec">The Privacy Policy</a></v-list-item-subtitle>
                        <v-list-item-subtitle class="itemlist"><a href="#" class="aFooterSec">Payments & Returns</a></v-list-item-subtitle>
                        <v-list-item-subtitle class="itemlist"><a href="#" class="aFooterSec">Product Care</a></v-list-item-subtitle>
                        <v-list-item-subtitle class="itemlist"><a href="#" class="aFooterSec">FAQ'S</a></v-list-item-subtitle>
                        <v-list-item-subtitle class="itemlist"><a href="#" class="aFooterSec">Shipping Information</a></v-list-item-subtitle>
                        <v-list-item-subtitle class="itemlist"><a href="#" class="aFooterSec">Accounts Setting</a></v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-col>
            <v-col md="2" sm="2" lg="2" xsm="2">
                <v-list-item two-line>
                    <v-list-item-content>
                        <v-list-item-title class="title">SUBSCRIBE FOR<br> MORE UPDATES</v-list-item-title>
                        <v-list-item-subtitle class="itemlist">
                            Sign up for Newsletter to Get all the<br>
                            information on Events. Offers. Sales and More.
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <br>
                <form action="#">
                    <input type="email" placeholder="Email address"/>
                    <button type="submit"><vue-fontawesome icon="paper-plane" size="1" class="iconsFooter"></vue-fontawesome></button>
                </form>
                <p style="font-size: 9px;">
                    We never share your mail at anywhere
                </p>
                <v-card-text>
                    <vue-fontawesome :icon="icon" size="1" v-for="icon in icons" :key="icon" class="iconsFooter"></vue-fontawesome>
                </v-card-text>
            </v-col>
            <v-col md="2" sm="2" lg="2" xsm="2"></v-col>
        </v-row>
      </v-card-title>
            <v-card-text class="py-2 white--text text-center colorSecondFooter">
                <v-row>
                    <v-col md="2" sm="2" lg="2" xsm="2"></v-col>
                    <v-col md="8" sm="8" lg="8" xsm="8">
                        Copyrights &copy;  {{ new Date().getFullYear() }}. Company All Rights Reserved
                    </v-col>
                    <v-col md="2" sm="2" lg="2" xms="2"></v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
    export default {
        name: 'Footer',
        data(){
            return{
                logo: '/img/logoBlanco.png',
                icons: [
                    'twitter',
                    'linkedin-square',
                    'facebook-square',
                    'skype',
                    'pinterest-square'
                ],
            }
        },
    }
</script>