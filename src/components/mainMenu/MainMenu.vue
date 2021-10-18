<template>
<div class="shadow-sm w-100">
  <b-navbar class="navbar">
    <b-navbar-brand href="#">
      <router-link to="/"><img class="d-inline-block align-top" src="../../assets/logo-menu.svg" alt="logo"></router-link>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse class="d-flex justify-content-end" id="nav-collapse" is-nav>
      <b-navbar-nav class="d-flex justify-content-between">
        <b-nav-item class="btn-item"> <router-link to="/Home">Home</router-link></b-nav-item>
        <b-nav-item class="btn-item"> <router-link to="/Register">Register</router-link></b-nav-item>
        <b-nav-item class="btn-login-menu"> <router-link to="/Login">Login</router-link></b-nav-item>
        <!-- <b-nav-item href="#">Disabled</b-nav-item> -->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
    
}
</script>

<style>

.navbar {
    background: var(--bg-nav);
    padding: 0.5rem;
}

.btn-login-menu {
    background: var(--light-orange);
    border-radius: 5px;
}

.btn-item a {
  color: var(--light-gray);
}
</style>
