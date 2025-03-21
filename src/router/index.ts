import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SearchView from '@/views/SearchView.vue'
import InsertView from '@/views/InsertView.vue'
import ApplyView from '@/views/ApplyView.vue'
import SettingsView from '@/views/SettingsView.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/search',
      name: 'Search',
      component: SearchView
    },
    {
      path: '/insert/:id',
      name: 'Insert',
      component: InsertView,
      props: true
    },
    {
      path: '/apply/:id',
      name: 'Apply',
      component: ApplyView,
      props: true
    },
    {
      path: '/settings',
      name: 'Settings',
      component: SettingsView
    }
  ]
})
