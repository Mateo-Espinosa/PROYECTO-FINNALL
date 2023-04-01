import { createRouter, createWebHistory } from 'vue-router'

import Favoritos from '@/views/juegosFavoritos.vue'
import mainView from '@/views/mainView.vue'
import perfilUsuario from '@/views/perfilUsuario.vue'
import loginView from '@/views/loginView.vue'
import contactoView from '@/views/contacView.vue'
import cerrarsesion from '@/views/cerrarSesionView.vue'
import tiendaView from "@/views/tiendaView.vue"
import carritoView from "@/views/carritoView.vue"

const routes = [
  
  {
    path: '/',
    name: 'login',
    component: loginView
  },
  {
    path: '/principal',
    name: 'main',
    component: mainView,
    meta: {
      title: 'Inicio'
    }
  },

  {
    path: '/favoritos',
  name: 'Favoritos',
  component: Favoritos,
  props: (route) => ({ favoritos: route.query.favoritos })
  },
  {
  path: '/perfil',
  name: 'perfil',
  component: perfilUsuario
},
{
  path: '/contacto',
  name: 'contacto',
  component: contactoView
},
{
  path: '/cerrar',
  name: 'cerrar',
  component: cerrarsesion
},
{
  path: '/tienda',
  name: 'tienda',
  component: tiendaView
},
{
  path: '/carrito',
  name: 'carrito',
  component: carritoView
},

]
  

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
