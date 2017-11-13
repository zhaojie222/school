import './css/reset.css';
import Vue from 'vue';
import axios from './axios/axios.js';
import app from './app.vue';
import routes from './routers/router';
import router from './routers/router';
import store from './store/store.js';

new Vue({
    el: ".box",
    router: router,
    store,
    render:function(createElement){
       return createElement(app);
    },
    mounted:function(){
       
    }

});

if(module.hot){
    module.hot.accept();
}