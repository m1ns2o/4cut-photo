import { createRouter, createWebHistory } from "vue-router";
// import HomeView from '../views/HomeView.vue'

const routes = [
	{
		path: "/",
		name: "home",
		component: () => import("../views/StartPage.vue"),
	},
	{
		path: "/frame",
		name: "setFrame",
		component: () => import("../views/PhotoFrame.vue"),
	},
	{
		path: "/photo",
		name: "setPhoto",
		component: () => import("../views/PhotoCount.vue"),
	},
	{
		path: "/pay",
		name: "payCreditcard",
		component: () => import("../views/PayView.vue"),
	},
	{
		path: "/camera",
		name: "photoCamera",
		component: () => import("../views/CameraView.vue"),
	},
	{
		path: "/test",
		name: "test",
		component: () => import("../views/TestView.vue"),
	},
	{
		path: "/custom",
		name: "custom",
		component: () => import("../views/CustomView.vue"),
	},
	{
		path: "/about",
		name: "about",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
