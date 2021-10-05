<template>
    <div class="container d-flex justify-content-center align-items-center">
        <div class="row w-25">
            <img src="../assets/logo.svg" alt="Logo">
            <h2 class="pt-3 text-center">Welcome back</h2>
            <login-form class="pt-3"/>
            <p class="pt-4 pb-4 d-flex justify-content-center align-items-center">New here? <a href=""> <strong>Register now</strong> </a></p>
            <footer class="d-flex justify-content-center align-items-center"> <small> © 2021 BB8 Team. All rights reserved.</small></footer>
        </div>  
    </div>

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
    .container {
        margin-top: 8rem;
    }

    img {
        width: 6rem;
        height: 6rem;
    }

    strong {
        color: var(--light-orange);
    }
</style>

