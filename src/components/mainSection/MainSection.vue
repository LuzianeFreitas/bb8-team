<template>
    <div class="container-main-section p-5">
        <article>
            <h1 class="title">
                Quality for chip.
            </h1>

            <p style="color: var()">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus repudiandae possimus corrupti sit quis, perferendis, aliquam inventore asperiores officia blanditiis ut similique fuga unde vitae. Rem repellat pariatur voluptate dicta!
            </p>
            <b-button class="btn-hire-us">
                Hire us
            </b-button>
        </article>
        <div>
            <img src="../../assets/ilustration.svg" alt="Ilustração">
        </div>
        
        <div class="container-btn">
            <img class="btn-vetor" src="../../assets/vector.svg" alt="seta">
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

.container-main-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.container-btn {
    grid-column-start: 2;
    grid-row-start: 2;
    grid-row-end: 3;
}

.btn-hire-us {
    border: 1px solid #FDE5CA;
    color: var(--light-orange);
    background: #FDE5CA;
}

.btn-hire-us:hover {
    border: 1px solid #FDE5CA;
    color: var(--light-orange);
    background: #FDE5CA;
    filter: brightness(0.9)
}

.btn-vetor {
    height: 2rem;
}


</style>
