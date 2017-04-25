import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import VueCharts from 'vue-charts'
import App from './App.vue'

import home from './component/Home.vue'
import graph from './component/Graph.vue'
// import archive from './component/Archive.vue'
// import about from './component/About.vue'
// import articleDetails from './component/ArticleDetails.vue'
// import classify from './component/Classify.vue'
// import label from './component/Label.vue'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueCharts)

const router = new VueRouter({
	routes: [
		{path: '/', component: home},
		{path: '/graph', component: graph},
		// {path: '/archive', component: archive},
		// {path: '/about', component: about},
		// {path: '/articleDetails:id', component: articleDetails},
		// {path: '/classify', component: classify},
		// {path: '/label', component: label}
	]
})

new Vue({
  	el: '#app',
  	router: router,
  	render: h => h(App)
})