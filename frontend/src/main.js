import { createApp } from 'vue'
import App from './App.vue'

import router from './router';
import store from './store';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCheck } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faCheck)

createApp(App)
.use(router)
.use(store)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
