import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'

export const routes = [
    {path: '', component: Home},
    { path: '/Login', component: Login },
    { path: '/Register', component: Register },
    { path: '/Home', component: Home }
]