<template>
    <main>
        <img src="../assets/logo.svg" alt="Logo">
        <h2>Welcome back</h2>
        <login-form/>
    </main>
</template>

<script>
import LoginForm from '../components/loginForm/LoginForm'

export default {
    components: {
        LoginForm
    }
}
</script>

<style>
	main {
		background: url("../assets/bg.svg");
	}
</style>

