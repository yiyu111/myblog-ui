import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Index from '../components/Index'
import Detail from '../components/Detail'
import About from '../components/About'
import Admin from '../views/Admin'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/index'
  },
  {
    path: '/',
    component: Home,
    children: [{
        path: 'index',
        component: Index
      },
      {
        path: 'detail/:blogId',
        component: Detail,
        name: 'Detail'
      },
      {
        ptah: 'result',
        component: () => import('../components/Result.vue')
        
      },
      {
        path: 'about',
        name: 'About',
        component: About,
      },
      {
        path: 'login',
        component:()=>import('../components/Login.vue')
      }

    ],
  },
  {
    path: '/admin',
    name: Admin,
    component: Admin,
    children: [{
        path: 'index',
        component: () => import('../components/admin/DashBoard.vue')
      },
      {
        path: 'blog',
        component: () => import('../components/admin/Blog.vue')
      },
      {
        path: 'log',
        component: () => import('../components/admin/Log.vue')
      },
      {
        path: 'tag',
        component: () => import('../components/admin/Tag.vue')
      },
      {
        path: 'create',
        component: () => import('../components/admin/Write.vue')
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path == '/admin/*') {
    if (this.$store.state.userInfo)
        next()
  } else {
    console.log(sessionStorage.getItem('userInfo'))
    next()
  }
})

export default router