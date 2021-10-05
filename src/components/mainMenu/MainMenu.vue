<template>
<div>
  <b-navbar class="navbar">
    <b-navbar-brand href="#">
        <img src="../../assets/logo-menu.svg" alt="logo">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item> <router-link to="/Login">Login</router-link></b-nav-item>
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
}
</style>
