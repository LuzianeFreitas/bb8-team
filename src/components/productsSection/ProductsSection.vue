<template>
    <div class="container-products p-5">
        <h1 class="title pb-3 text-center">More than an agency.</h1>
        <div class="d-flex justify-content-around container-products">
            <article>
                <h2>Writing</h2>
                <img src="../../assets/writing.svg" alt="writing">
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, necessitatibus! Possimus,
                </p>
            </article>
            <article>
                <h2>Graphic Design</h2>
                <img src="../../assets/graphicDesign_icon.svg" alt="Graphic Design">
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, necessitatibus! Possimus,
                </p>
            </article>
            <article>
                <h2>Software Development</h2>
                <img src="../../assets/softwareDevelopment_icon.svg" alt="Software Development">
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, necessitatibus! Possimus,
                </p>
            </article>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.container-products article {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: "title icon"
    "content content";

    margin: 1rem;
    padding: 1rem;
    border: 1px solid;
    border-radius: 20px;
}

.container-products article h2 {
    grid-area: title;
}

.container-products article img {
    grid-area: icon;
    justify-self: end
}

.container-products article p {
    grid-area: content;
    color: var(--light-gray);
    padding-top: 1rem;
}

.container-products article:nth-child(1){
    color: #BE49E8;
    border-color: #BE49E8;
    background-color: rgba(254, 252, 254, 1);
}
.container-products article:nth-child(2){
    color: #5398E9;
    border-color: #5398E9;
    background-color: rgba(250, 252, 255, 1);
}
.container-products article:nth-child(3){
    color: #2BBC5D;
    border-color: #2BBC5D;
    background-color: rgba(250, 255, 252, 1);
}
</style>
