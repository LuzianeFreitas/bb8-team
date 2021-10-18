<template>
    <div class="container-home">
        <main-section class="mb-5"/>
        <companies-section class="mb-5"/>
        <products-section class="mb-5"/>
        <testemunias class="mb-5"/>
        <footer-section/>
        
        

        

        <label for="checkbox" class="switch-label">
            <input
                @change="toggleTheme"
                id="checkbox"
                type="checkbox"
                class="switch-checkbox"
            />
            <span>🌙</span>
            <span>☀️</span>
            <div
            class="switch-toggle"
            :class="{ 'switch-toggle-checked': userTheme === 'dark-theme' }"
            ></div>
        </label>      

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
    },
    mounted() {
        const initUserTheme = this.getMediaPreference();
        this.setTheme(initUserTheme);
    },
    methods: {
        setTheme(theme) {
            localStorage.setItem("user-theme", theme);
            this.userTheme = theme;
            document.documentElement.className = theme;
        },
        toggleTheme() {
            const activeTheme = localStorage.getItem("user-theme");
            if (activeTheme === "light-theme") {
                this.setTheme("dark-theme");
            } else {
                this.setTheme("light-theme");
            }
        },
        getMediaPreference() {
            const hasDarkPreference = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;
            if (hasDarkPreference) {
                return "dark-theme";
            } else {
                return "light-theme";
            }
        },
    },

    data() {
        return {
            userTheme: "light-theme",
        };
    },
}
</script>

<style scoped>
    body .container-home{
        background-image: url("../assets/bg-dots.svg");
        background-repeat: repeat;
    }
 
    .switch-label {
        width: 5rem;
        border-radius: 4rem;
        border: calc(4rem * 0.025) solid #cacaca;
        padding: calc(4.2rem * 0.1);
        font-size: calc(4rem * 0.35);

        /* align-items: center; */
        background: transparent;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        transition: background 0.5s ease;
        justify-content: space-between;
        z-index: 2;
        bottom: 10px;
        right: 10px;
    }

    .switch-checkbox {
        display: none;
    }

    .switch-toggle {
        position: absolute;
        background-color:  #ebebeb;
        border-radius: 50%;
        top: 1;
        left: calc(4.3rem * 0.07);
        height: calc(5rem * 0.4);
        width: calc(4.9rem * 0.4);
        transform: translateX(0);
        transition: transform 0.3s ease, background-color 0.5s ease;
    }

    .switch-toggle-checked {
        transform: translateX(calc(3.8rem * 0.6)) !important;
    } 
</style>

