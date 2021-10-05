<template>
<div>
  <b-navbar class="navbar">
    <b-navbar-brand href="#">
        <img class="w-50 d-inline-block align-top" src="../../assets/logo-menu.svg" alt="logo">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse class="d-flex justify-content-end" id="nav-collapse" is-nav>
      <b-navbar-nav>
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
    background: var(--bg);
    padding: 0.5rem;
}

.btn-login-menu {
    background: var(--light-orange);
    border-radius: 5px;
}
</style>
