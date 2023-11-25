<template>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <header>
        <div class="logo"><router-link to="/">Logo</router-link></div>
        <div class="nav-links">
            <router-link to="/employee">Employee List</router-link>
            <router-link to="/addemployee">Add Employee</router-link>
            <router-link to="/login">Login</router-link>
            <router-link to="/register">Register</router-link>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header_page'
}
</script>
  
<style scoped>
header {
    background-color: #333;
    color: #fff;
    padding: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.5em;
}

.nav-links a {
    color: #fff;
    text-decoration: none;
    margin-left: 10px;
}
</style>
  