import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import VueCharts from 'vue-charts'
import App from './Main.vue'

import Home from './component/Home.vue'
import Graph from './component/Graph.vue'
import Learning from './component/learning/Learning.vue'
//import LearningHttp from './component/learning/Learning.http.vue'



Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueCharts);



const router = new VueRouter({
	routes: [
		{path: '/', component: Home},
		{path: '/graph', component: Graph},
		{path: '/learning', component: Learning,
			// children: [
			// 	{
			// 		path: 'http',
			// 		component: LearningHttp
			// 	}
			// ]
		}
	]
})


new Vue({
  	el: '#app',
  	router: router,
  	render: h => h(App),
})