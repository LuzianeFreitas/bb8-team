<template>
    <div class="container d-flex justify-content-center align-items-center">
        <div class="row w-25">
            <img src="../assets/logo.svg" alt="Logo">
            <h2 class="pt-3 text-center">Welcome back</h2>
            <login-form class="pt-3"/>
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

    h2 {
        color: var(--light-gray);
    }
</style>

