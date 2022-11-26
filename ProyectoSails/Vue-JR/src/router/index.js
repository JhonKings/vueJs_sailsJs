import { createRouter, createWebHistory } from 'vue-router'
//Funcionario
import FuncionarioView from '../views/FuncionarioView.vue'
import AgregarFuncionarioView from '../views/AgregarFuncionarioView.vue'
import ModificarFuncionarioView from '../views/ModificarFuncionarioView.vue'
//Unidad
import UnidadView from '../views/UnidadView.vue'
import AgregarUnidadView from '../views/AgregarUnidadView.vue'
import ModificarUnidadView from '../views/ModificarUnidadView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [        
    {
      path: '/',
      redirect: "/funcionarios"
    },
    {
      path: '/funcionarios',
      name: 'funcionarios',
      component: FuncionarioView
    },
    {
      path: '/agregar-funcionario',
      name: 'agregar-funcionario',
      component: AgregarFuncionarioView
    },
    {
      path: '/modificar-funcionario/:id',
      name: 'modificar-funcionario',
      component: ModificarFuncionarioView
    },

    {
      path: '/',
      redirect: "/unidades"
    },
    {
      path: '/unidades',
      name: 'unidades',
      component: UnidadView
    },
    {
      path: '/agregar-unidad',
      name: 'agregar-unidad',
      component: AgregarUnidadView
    },
    {
      path: '/modificar-unidad/:id',
      name: 'modificar-unidad',
      component: ModificarUnidadView
    }
  ]
})

export default router
