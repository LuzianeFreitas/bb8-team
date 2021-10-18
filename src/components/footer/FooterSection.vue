<template>
    <div class="p-5" style="background: #FFA540; color: #fff;">
        <div class="container-footer">
            <h2>BB8 Team</h2>
            <section class="menu-lateral">
                <h3>Quality for cheap</h3>
                <div class="d-flex flex-column">
                    <a href="#">Back to the top</a>
                    <router-link to="/Login">Login</router-link>
                    <router-link to="/Register">Register</router-link>
                </div>
            </section>

            <section class="infos">
                <h3>Get in touch</h3>
                <div class="item-phone">
                    <img class="icon-contact" src="../../assets/phone-icon.svg" alt="">
                    <span>
                        209-296-5917
                    </span>    
                </div>
                <div class="item-adress pt-3">
                    <img class="icon-contact" src="../../assets/adress.svg" alt="">
                    <span>
                        2184  Freedom Lane, Pine Grove
                        United States                        
                    </span>

                </div>
            </section>
        </div>
        <footer class="d-flex align-items-center justify-content-center mt-3">
            <p>© 2021 BB8 Team. All rights reserved.</p>
        </footer>
        
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.container-footer {
    background-image: url(../../assets/raio-icon.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 400px 155px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: "title title"
                        "menu-lateral infos"
                        "footer footer";
}

.container-footer h2 {
    grid-area: title;
}

.container-footer .menu-lateral {
    grid-area: menu-lateral;
}

.container-footer .infos {
    grid-area: infos;
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.infos h3 {
    grid-column-start: 2;
    grid-row-start: 1;
    grid-row-end: 1;
}

.infos .item-phone {
    grid-column-start: 2;
    grid-row-start: 2;
    grid-row-end: 2;
}

.infos .item-adress {
    grid-column-start: 2;
    grid-row-start: 3;
    grid-row-end: 3;
}

.container-footer footer {
    grid-area: footer;
}

.icon-contact {
    padding-right: 1.3rem
}

@media (max-width: 575.98px) {
    .container-footer {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-areas: "title"
                        "menu-lateral"
                        "infos"
                        "footer";
    }

    .container-footer h2 {
        text-align: center;
    }

    .container-footer .infos {
        margin-top: 2rem;
        grid-area: infos;
        display: grid;
        grid-template-columns: 1fr;
    }

    .infos h3 {
        grid-column-start: 1;

    }

    .infos .item-phone {
        grid-column-start: 1;

    }

    .infos .item-adress {
        grid-column-start: 1;

    }
}
</style>
