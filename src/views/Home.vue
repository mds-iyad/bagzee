<template>
    <Landing />
    <HomeContent />
    <Articles />
</template>




<script>

import Navbar from "../components/Navbar.vue"
import Footer from "../components/Footer.vue"
import Landing from "../components/Landing.vue"
import HomeContent from "../components/HomeContent.vue"
import Articles from "../components/Articles.vue"

export default {
    components: {Navbar, Footer, Landing, HomeContent, Articles}
}
</script>