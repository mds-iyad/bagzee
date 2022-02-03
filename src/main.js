import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config'
// import Button from 'primevue/button'
// import Breadcrumb from 'primevue/breadcrumb'

import BalmUI from 'balm-ui'; // Official Google Material Components
import BalmUIPlus from 'balm-ui-plus'; // BalmJS Team Material Components
import 'balm-ui-css';

import 'primevue/resources/themes/bootstrap4-light-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                            //core css
import 'primeicons/primeicons.css'                                     //icons
import 'primeflex/primeflex.css'
import router from './router'
import ToastService from 'primevue/toastservice';


const app = createApp(App).use(router);
app.use(ToastService);
app.use(PrimeVue,{ripple: true})
app.use(BalmUI);
app.use(BalmUIPlus);

// app.component('Button', Button)
// app.component('Breadcrumb', Breadcrumb)


app.mount('#app')
