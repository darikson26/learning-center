const HistoricalObjectNew = () => import('./views/historical-object-new.vue');

const collectionRoutes = [
  { path: 'items/new', name: 'historical-object-new', component: HistoricalObjectNew }
];

export default collectionRoutes;
