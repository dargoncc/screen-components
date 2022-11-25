import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {addListener, launch} from 'devtools-detector'
addListener(
  isOpen => (isOpen ? location.href = 'https://wwww.baidu.com' : '')
)
launch()
createApp(App).mount('#app')
