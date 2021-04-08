import Vue from 'vue';
import test from "./test.vue";
import { BootstrapVue } from 'bootstrap-vue';

Vue.use(BootstrapVue);

const app = new Vue({
    el: '#app',
    render: h => h(test)
});