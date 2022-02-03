<template>
  <Navbar />
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/community">About</router-link>
  </div> -->
  <router-view/>
  <Footer />
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',

  components: {
    Navbar,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
html {
    scroll-behavior: smooth !important;
}
:root{

    --Primary-Color: #158CAD;
    --Secondary-Color: #2accfa;
    --Tertiary-Color:  #fb6e4a; 
}

input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
      -webkit-appearance: none; 
      margin: 0; 
}
input[type=number] { 
    -moz-appearance: textfield;
    appearance: textfield;
    margin: 0; 
}
body{
  margin: 0;
}

</style>