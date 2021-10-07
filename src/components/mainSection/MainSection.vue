<template>
    <div>
        <div >
            <div>
                <h1 class="title">
                    Quality for chip.
                </h1>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus repudiandae possimus corrupti sit quis, perferendis, aliquam inventore asperiores officia blanditiis ut similique fuga unde vitae. Rem repellat pariatur voluptate dicta!
                </p>
                <b-button class="btn-hire-us">
                    Hire us
                </b-button> 
            </div>

            <img class=" ilustration" src="../../assets/ilustration.svg" alt="Ilustração">
        </div>
        <div>
            <img class="btn-vetor" src="../../assets/vector.svg" alt="seta">
        </div>

    </div>
</template>

<script>
export default {
    
}
</script>

<style>

.title {
    color: var(--light-orange);
}

.ilustration {
    width: 486px;
    height: 612px;
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
