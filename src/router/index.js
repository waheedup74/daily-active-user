import Vue from 'vue'
import createRouter from 'vue-router'
import ChartView from "../views/ChartView"
import TableView from "../views/TableView"

Vue.use(createRouter);

const routes = [
    {
      path: '/',
      name: 'Table',
      component: TableView
   
    },
    {
      path: '/chart',
      name: 'chart',
      component: ChartView
    }
  ]
  const router = new createRouter({
    mode: 'history',
    routes,
  });
  export default router