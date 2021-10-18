<template>
    <div class="p-5" style="background: #FFA540; color: #fff">
        <div class="d-flex flex-row justify-content-between">
            <section>
                <h2>BB8 Team</h2>
                <h3>Quality for cheap</h3>
                <div class="d-flex flex-column">
                    <a href="#">Back to the top</a>
                    <router-link to="/Login">Login</router-link>
                    <router-link to="/Register">Register</router-link>
                </div>
            </section>
            <section>
                <img src="../../assets/raio-icon.svg" alt="">
            </section>
            <section>
                <h3>Get in touch</h3>
                <div class="d-flex align-items-center">
                    <img class="icon-contact" src="../../assets/phone-icon.svg" alt="">
                    <span>
                        209-296-5917
                    </span>    
                </div>
                <div class="d-flex align-items-center pt-3">
                    <img class="icon-contact" src="../../assets/adress.svg" alt="">
                    <span>
                        2184  Freedom Lane, Pine Grove
                        United States                        
                    </span>

                </div>
            </section>
        </div>
        <div class="d-flex align-items-center justify-content-center mt-3">
            <p>© 2021 BB8 Team. All rights reserved.</p>
        </div>
        
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
.icon-contact {
    padding-right: 1.3rem
}
</style>
