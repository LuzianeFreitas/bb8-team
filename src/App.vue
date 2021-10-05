<template>
  <div id="app">
    <main-menu></main-menu>
    <transition name="pagina">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import MainMenu from './components/mainMenu/MainMenu'
export default {
  name: 'App',
  components: {
    MainMenu
  }
}
</script>

<style>
#app {

}
</style>
