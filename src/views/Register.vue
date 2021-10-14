<template>
<div class="container-register">
    <div class="container d-flex justify-content-center align-items-center">
        <div class="row w-25">
            <div class="d-flex justify-content-center align-items-center">
                <img class="logo" src="../assets/logo.svg" alt="Logo">
            </div>
            <h2 class="pt-3 text-center">Register</h2>
            <register-form class="pt-3"/>
            <p class="pt-4 pb-4 d-flex justify-content-center align-items-center">Já tem uma conta? <router-link to="/Login"> <strong>Login</strong> </router-link></p>
            <footer class="pb-2 d-flex justify-content-center align-items-center"> <small> © 2021 BB8 Team. All rights reserved.</small></footer>
        </div>  
    </div>
</div>
</template>

<script>
import RegisterForm from '../components/registerForm/RegisterForm'

export default {
    name: 'Register',
    components: {
        RegisterForm
    },
    //     beforeRouteEnter(to, from, next) {
    //     window.document.body.style.backgroundImage = 'url("../assets/bg.svg")';
    //     window.document.body.style.backgroundRepeat = 'repeat';
    //     next();
    // },
    // beforeRouteLeave(to, from, next) {
    //     window.document.body.style.backgroundImage = '';
    //     window.document.body.style.backgroundRepeat = '';
    //     next();
    // }
}
</script>

<style>
    body .container-register{
        background-image: url("../assets/bg.svg");
        background-size: cover
    }
</style>

