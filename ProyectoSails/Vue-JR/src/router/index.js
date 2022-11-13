import { createRouter, createWebHistory } from 'vue-router'
import UsuariosView from '../views/UsuariosView.vue'
import AgregarUsuarioView from '../views/AgregarUsuarioView.vue'
import ModificarUsuarioView from '../views/ModificarUsuarioView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [        
    {
      path: '/',
      redirect: "/usuarios"
    },
    {
      path: '/usuarios',
      name: 'usuarios',
      component: UsuariosView
    },
    {
      path: '/agregar-usuario',
      name: 'agregar-usuario',
      component: AgregarUsuarioView
    },
    {
      path: '/modificar-usuario/:id',
      name: 'modificar-usuario',
      component: ModificarUsuarioView
    }
  ]
})

export default router
