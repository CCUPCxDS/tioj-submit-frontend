import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './css/index.css'
import VueUploadComponent from 'vue-upload-component'
import Antd from 'ant-design-vue';

const app = createApp(App)

app.use(router)
app.use(Antd)
app.component('file-upload', VueUploadComponent)
app.mount('#app')
