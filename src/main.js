import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Dashboard from "./views/Dashboard.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Home from "./views/Home.vue";
import Employee from "./views/employee/Employee.vue";
import AddEmployee from "./views/employee/AddEmployee.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/dashboard", component: Dashboard },
    { path: "/employee", component: Employee },
    { path: "/addemployee", component: AddEmployee },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});


createApp(App).use(router).mount('#app')
