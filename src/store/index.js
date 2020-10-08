import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)
export const store = new Vuex.Store({ 
    state:{
        items: null
    },
    mutations:{
        setItems(state, items){
            state.items = items;
        }
    },
    actions: {
        saveItems({commit}, items){
            commit('setItems', items);
            localStorage.setItem("cart", JSON.stringify(items));
        },
        
    },
    getters:{
        getItems: state =>{
            return state.items = JSON.parse(localStorage.getItem('cart'));
        }
    }
});