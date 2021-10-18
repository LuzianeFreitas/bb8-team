<template>
    <div class="container-companies d-flex flex-column justify-content-between align-items-center p-5">
        <h1 class="title-companies">Companies that trust us</h1>
        <p class="title-companies">
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        </p>
        <div class="container-img-companies">
            <img src="../../assets/logo-6.svg" alt="Companies">
            <img src="../../assets/logo-7.svg" alt="Companies">
            <img src="../../assets/logo-8.svg" alt="Companies">
            <img src="../../assets/logo-9.svg" alt="Companies">
            <img src="../../assets/logo-24.svg" alt="Companies">
        </div>
        
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

.container-companies {
    background-color: var(--transparent-gray);
}

.title-companies {
    color: var(--title-modes);
}

@media (max-width: 575.98px) {
    .container-img-companies {
        text-align: center;
    }
}

</style>
