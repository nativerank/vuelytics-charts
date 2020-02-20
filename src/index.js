import FirstComponent from './FirstComponent.vue'
import SecondComponent from './SecondComponent.vue'


export default {
    install(Vue, options) {
        Vue.component("first-component", FirstComponent);
        Vue.component("second-component", SecondComponent);
    }
};