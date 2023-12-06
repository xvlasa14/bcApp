import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from "./views/pages/LoginPage.vue";
import HomePage from "./views/pages/HomePage.vue";
import UserPage from "./views/pages/UserPage.vue";
import PatientPage from "./views/pages/PatientPage.vue";
import TestsPage from "./views/pages/TestsPage.vue";

export default createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			component: HomePage,
		},
		{
			path: "/login",
			component: LoginPage,
		},
		{
			path: "/user",
			component: UserPage,
		},
		{
			path: "/patient",
			component: PatientPage,
		},
		{
			path: "/tests",
			component: TestsPage,
		},
	],
});
