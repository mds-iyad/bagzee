<template>
    <header>
        <div class="navBar">
            <nav class="menu-navigation">
                <div id="test" class="logo">
                    <router-link :to="{ name: 'Home' }"><a>BAGZEE</a></router-link>
                    
                </div>

                <div class="nav-left">

                    <router-link :to="{ name: 'Community' }">Communauté</router-link>

                    <div class="vertical-line-svg">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 172 172"
                            style=" fill:#000000;">
                            <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                                stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                                font-family="none" font-weight="none" font-size="none" text-anchor="none"
                                style="mix-blend-mode: normal">
                                <path d="M0,172v-172h172v172z" fill="none"></path>
                                <g fill="#1f4b72">
                                    <path
                                        d="M85.88802,14.23535c-3.95253,0.06178 -7.10881,3.312 -7.05469,7.26465v129c-0.03655,2.58456 1.32136,4.98858 3.55376,6.29153c2.2324,1.30295 4.99342,1.30295 7.22582,0c2.2324,-1.30295 3.59031,-3.70697 3.55376,-6.29153v-129c0.02653,-1.93715 -0.73227,-3.80254 -2.10349,-5.17112c-1.37122,-1.36858 -3.23806,-2.12378 -5.17516,-2.09353z">
                                    </path>
                                </g>
                            </g>
                        </svg>
                    </div>

                    <Button label="Link" class="p-button-link" v-on:click="toggleHidden" id="btn-ProposerOuPorter" >Proposer / Porter un bagage</Button>

                    <div class="vertical-line-svg">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 172 172"
                            style=" fill:#000000;">
                            <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                                stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                                font-family="none" font-weight="none" font-size="none" text-anchor="none"
                                style="mix-blend-mode: normal">
                                <path d="M0,172v-172h172v172z" fill="none"></path>
                                <g fill="#1f4b72">
                                    <path
                                        d="M85.88802,14.23535c-3.95253,0.06178 -7.10881,3.312 -7.05469,7.26465v129c-0.03655,2.58456 1.32136,4.98858 3.55376,6.29153c2.2324,1.30295 4.99342,1.30295 7.22582,0c2.2324,-1.30295 3.59031,-3.70697 3.55376,-6.29153v-129c0.02653,-1.93715 -0.73227,-3.80254 -2.10349,-5.17112c-1.37122,-1.36858 -3.23806,-2.12378 -5.17516,-2.09353z">
                                    </path>
                                </g>
                            </g>
                        </svg>
                    </div>

                    <router-link :to="{ name: 'Professionnels' }">Professionnels</router-link>

                </div>
                <div class="nav-right">
                    <div class="langage-flag">
                        <a href="">
                            <img src="../assets/images/flag-uk.jpg" alt="" width="24px" height="20px">
                        </a>
                        <div class="vertical-line-svg">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24"
                                viewBox="0 0 172 172" style=" fill:#000000;">
                                <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt"
                                    stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0"
                                    font-family="none" font-weight="none" font-size="none" text-anchor="none"
                                    style="mix-blend-mode: normal">
                                    <path d="M0,172v-172h172v172z" fill="none"></path>
                                    <g fill="#1f4b72">
                                        <path
                                            d="M85.88802,14.23535c-3.95253,0.06178 -7.10881,3.312 -7.05469,7.26465v129c-0.03655,2.58456 1.32136,4.98858 3.55376,6.29153c2.2324,1.30295 4.99342,1.30295 7.22582,0c2.2324,-1.30295 3.59031,-3.70697 3.55376,-6.29153v-129c0.02653,-1.93715 -0.73227,-3.80254 -2.10349,-5.17112c-1.37122,-1.36858 -3.23806,-2.12378 -5.17516,-2.09353z">
                                        </path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <a href="">
                            <img src="../assets/images/france-flag.jpg" alt="" width="24px" height="20px">
                        </a>
                    </div>

                    <button id="signin-button" class="signin-button" aria-expanded="false" type="button">
                        Se Connecter
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="svg-login" width="24" height="24"
                            aria-hidden="true">
                            <polyline fill="none" stroke="#3ab4d5" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" stroke-miterlimit="10" points="9 18 15 12 9 6"
                                transform="rotate(90 12 12)">
                            </polyline>
                        </svg>
                    </button>
                </div>

            </nav>

            <transition name="popup">
                <div v-if="!isHidden" class="choosingContainer">
                    <div class="choices">
                        <Button style="outline:none;" icon="pi pi-times" v-on:click="isHidden = true" class="p-button-rounded p-button-secondary p-button-text mr-2 mb-2 btn-close" />
                        <!-- <button style="outline:none;" v-on:click="isHidden = true" class="btn-close" type="button" aria-label="Close"></button> -->
                        <router-link v-on:click="isHidden = true" :to="{ name: 'Proposer'}">PROPOSER UN BAGAGE</router-link>
                        <router-link v-on:click="isHidden = true" :to="{ name: 'Porter'}">PORTER UN BAGAGE</router-link>
                    </div>
                </div>
            </transition>
        </div>
    </header>
</template>


<script>

import Button from 'primevue/button'

export default {
    components: {Button},
    data() {
        return {
            isHidden: true
        }
    },
    methods: {
        toggleHidden()
        {
            this.isHidden = !this.isHidden
        }
    }
}
</script>

<style scoped>
@font-face {
    font-family: PTSansNarrow;
    src: url(../assets/fonts/PTSansNarrow-Regular.ttf);
}
@font-face {
    font-family: PatrickHand;
    src: url(../assets/fonts/PatrickHand-Regular.ttf);
}
.navBar{
    display: flex;
    justify-content: center;
}
nav.menu-navigation {
    overflow: hidden;
    position: sticky;
    width: 100%;
    opacity:1;
    display: flex;
    justify-content: space-evenly;
    background-color: var(--Secondary-Color);
    height: 85px;
    text-align: center;

    z-index: 60;

    font-family: 'PatrickHand',sans-serif, monospace !important;
}

div.nav-right
{
    margin-top: 0px;
    padding-top: 0px;
    float: none;
    align-items: center;
    text-align: center;
    height: 100%;
    
}
.langage-flag a
{
    padding: 0px;
}
.langage-flag
{
    display: flex;
    float: none;
    justify-content: center;
    text-align: center;
    align-items: center;
    height: 25px;
    margin-top: 5px;
}

.langage-flag img
{
    border-radius: 100%;
}
.langage-flag img:hover{
    opacity: 0.5;
}

div.nav-left
{
    margin-top: 5px;
    display: flex;
    align-items: center;
    text-align: center;
}

div.logo
{
    float: left;
    text-align: center;
    align-items: center;   
}


div.logo a {
    text-decoration: none;
    display: flex;
    /* padding: 10px 16px; */
    font-size: 2.2rem;
    text-align: left;
    font-weight: 1000;
    color: var(--Tertiary-Color);
    text-shadow: 2px 0 0 var(--Primary-Color), -2px 0 0 var(--Primary-Color), 0 2px 0 var(--Primary-Color), 0 -2px 0 var(--Primary-Color), 1px 1px var(--Primary-Color), -1px -1px 0 var(--Primary-Color), 1px -1px 0 var(--Primary-Color), -1px 1px 0 var(--Primary-Color);
    height: 100%;
    text-align: center;
    align-items: center;
    font-family: 'PTSansNarrow';
}


div.nav-right a{
    text-decoration: none;
    text-align: center;
    display: flex;
    color: white;
}


div.nav-left a{
    text-align: center;
    text-decoration: none;
    display: flex;
    float: left;
    padding: 18px 16px;
    color: white;
    transition: all 0.3s ease;
    font-size: 18px;
}

div.nav-left a:hover{
    font-weight: 500;
    color: var(--Tertiary-Color);
}
#btn-ProposerOuPorter{
    text-align: center;
    text-decoration: none;
    display: flex;
    float: left;
    padding: 18px 16px;
    color: white;
    font-size: 18px;
    outline: none;
    border: none;
    background: none;
    transition: all 0.3s ease;
    font-family: 'PatrickHand', sans-serif, monospace;
}
#btn-ProposerOuPorter:hover{
    color: var(--Tertiary-Color);
    font-weight: 500;
}

button.signin-button {
    margin-top: 5px;
    /* box-shadow: 0px 15px 20px black; */
    color: #3ab4d5;
    border: none;
    font-size: 1rem;
    background-color: white;
    border-radius: 12px;
    padding: 10px 10px 10px 20px;
    transition: all 0.3s ease;
    
    font-family: 'PatrickHand', sans-serif, monospace;
    font-weight: 700;
    cursor: pointer;
    position: relative;
}

svg.svg-login
{
    font-size: 10px;
    cursor: pointer;
    float: right;
    margin-left: 5px;
    
}

button.signin-button:hover{
    background-color: var(--Tertiary-Color);
    color: white;

}

#headerApp{
    display: grid;
}

.choosingContainer{
    margin-top: 100px;
    display: flex;
    justify-content: center;
    position: fixed;

    z-index: 200000;
    background-color: rgba(117, 190, 218, 0.0);
    /* width: 100%; */
}
.choices{
    position: relative;
    border: solid 0.5rem var(--Tertiary-Color);
    border-radius: 50px;
    width: 1050px;
    height: 150px;
    background-color: var(--Secondary-Color);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    z-index: 59;
}
.choices a{
    color: var(--Primary-Color);
    text-decoration: none;
    font-family: 'PatrickHand', sans-serif, monospace; 
    font-size: 28px;
    font-weight: 500;
    transition: 0.2s ease-in;
}
.choices a:hover{
    color: var(--Tertiary-Color);
    text-decoration: none;
    font-size: 30px;
    text-shadow: 2px 0 0 white, -2px 0 0 White, 0 2px 0 white, 0 -2px 0 White, 1px 1px White, -1px -1px 0 White, 1px -1px 0 white, -1px 1px 0 white;
}

.btn-close{
    /* box-sizing: content-box; */
    width: 1em;
    height: 1em;
    padding: .25em .25em;
    color: #000;
    /* background: transparent url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e") center/1em auto no-repeat; */
    border: none;
    position: absolute;
    top: 15px;
    right: 15px;
    transition: 0.5s;
}
.btn-close:hover{
    color: #fb7c5c;
    text-decoration: none;
    opacity: .5;
}

.vertical-line-svg{
    display: flex;
}

.popup-enter-active,
.popup-leave-active {
    transition: all 1s;
}

.popup-enter-from,
.popup-leave-to {
opacity: 0;
transform: translateY(30px);
}

</style>