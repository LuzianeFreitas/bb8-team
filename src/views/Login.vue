<template>
<div class="container-login">
    <div class="container d-flex justify-content-center align-items-center">
        <div class="row w-25">
            <div class="d-flex justify-content-center align-items-center">
                <img class="logo" src="../assets/logo.svg" alt="Logo">
            </div>
            
            <h2 class="pt-3 text-center">Welcome back</h2>
            <login-form class="pt-3"/>
            <p class="pt-4 pb-4 d-flex justify-content-center align-items-center">New here? <router-link to="/Register"> <strong>Register now</strong> </router-link></p>
            <footer class="pb-2 d-flex justify-content-center align-items-center"> <small> © 2021 BB8 Team. All rights reserved.</small></footer>
        </div>  
    </div>
</div>
    

</template>

<script>
import LoginForm from '../components/loginForm/LoginForm'

export default {
    name: 'Login',
    components: {
        LoginForm
    }
}
</script>

<style>
    body .container-login{
        background-image: url("../assets/bg.svg");
        background-size: cover
    }
</style>

