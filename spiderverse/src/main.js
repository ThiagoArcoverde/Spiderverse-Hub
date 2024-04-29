import { createApp } from 'vue'
import App from './App.vue'
import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
    {
      path: '/',
      name: 'Home', 
      component: () => import ('./views/HomePage.vue')
    },
    {
      path: '/stories',
      name: 'Stories',
      component: () => import ('./views/StoriesPage.vue')
    },
    {
      path: '/characters',
      name: 'Characters',
      component: () => import ('./views/CharactersPage.vue')
    },
    {
      path: '/authors',
      name: 'Authors',
      component: () => import ('./views/AuthorsPage.vue')
    },
    {
      path: '/midia',
      name: 'Midia',
      component: () => import ('./views/MidiaPage.vue')
    }
  ]
  
  const router = createRouter ({
    routes,
    history: createMemoryHistory()
})

createApp(App)
    .use(router)
    .mount('#app')
