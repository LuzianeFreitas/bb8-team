<template>
    <div class="p-5">
        <h1 class="title pb-3 text-center">What our customers are saying...</h1>
        <div class="d-flex container-testemunias">
            <article>
                <div class="aspas">
                    <img src="../../assets/aspas.svg" alt="aspas">
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ulla.
                </p>
                <span class="d-block text-end">
                    Jonh Doe
                </span>
            </article>
            <article>
                <div class="aspas">
                    <img src="../../assets/aspas.svg" alt="aspas">
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ulla.
                </p>
                <span class="d-block text-end">
                    Jonh Doe
                </span>
            </article>
            <article>
                <div class="aspas">
                    <img src="../../assets/aspas.svg" alt="aspas">
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ulla.
                </p>
                <span class="d-block text-end">
                    Jonh Doe
                </span>
            </article>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.container-testemunias article{
    position: relative;
    margin: 1rem;
    padding: 1rem;
    border: 1px solid var(--light-orange);
    border-radius: 20px;
    background-color: var(--bg-tests);
    color: var(--title-modes);
}

.container-testemunias article .aspas{
    position: absolute;
    top: -25px;
    left: 0;
}

.container-testemunias article div img {
    width: 50px;
}

</style>

