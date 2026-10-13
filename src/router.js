import { createRouter, createWebHistory } from 'vue-router';
import collectionRoutes from './collection/presentation/collection-routes.js';

const Home = () => import('./shared/presentation/views/home.vue');
const PageNotFound = () => import('./shared/presentation/views/page-not-found.vue');

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'home', component: Home },
  { path: '/historicalobjects', children: collectionRoutes },
  { path: '/:pathMatch(.*)*', name: 'page-not-found', component: PageNotFound }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
