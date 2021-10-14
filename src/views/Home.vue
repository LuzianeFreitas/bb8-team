<template>
    <div class="container-home">
        <main-section class="mb-5"/>
        <companies-section class="mb-5"/>
        <products-section class="mb-5"/>
        <testemunias class="mb-5"/>
        <footer-section/>
    </div>
</template>

<script>
import MainSection from '../components/mainSection/MainSection'
import CompaniesSection from '../components/companiesSection/CompaniesSection'
import ProductsSection from '../components/productsSection/ProductsSection'
import Testemunias from '../components/testemunials/Testemunias'
import FooterSection from '../components/footer/FooterSection'

export default {
    name: 'Home',
    components: {
        MainSection,
        CompaniesSection,
        ProductsSection,
        Testemunias,
        FooterSection
    }
}
</script>

<style scoped>
    body .container-home{
        background-image: url("../assets/bg-dots.svg");
        background-repeat: repeat;
    }
</style>

