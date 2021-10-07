<template>
    <div class="container d-flex justify-content-center align-items-center">
        <div class="row w-25">
            <img class="logo" src="../assets/logo.svg" alt="Logo">
            <h2 class="pt-3 text-center">Register</h2>
            <register-form class="pt-3"/>
            <p class="pt-4 pb-4 d-flex justify-content-center align-items-center">Já tem uma conta? <router-link to="/Login"> <strong>Login</strong> </router-link></p>
            <footer class="pb-2 d-flex justify-content-center align-items-center"> <small> © 2021 BB8 Team. All rights reserved.</small></footer>
        </div>  
    </div>

</template>

<script>
import RegisterForm from '../components/registerForm/RegisterForm'

export default {
    name: 'Register',
    components: {
        RegisterForm
    }
}
</script>

<style>
    .container {
        margin-top: 2rem;
    }

    .logo {
        width: 6rem;
        height: 6rem;
    }

    strong {
        color: var(--light-orange);
    }
</style>

