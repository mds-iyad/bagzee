<template>
    <section class="home-section">
        <div class="contenu-home">
            <!-- <div class="image-search">
                <h1>
                Image
                </h1>
            </div> -->

            <div class="container container-home">
                <div class="list-tab">
                    <div class="first-checkbox">
                        <label for="porter">Je veux porter</label>
                        <input type="radio" name="porter" id="PorterCheck" checked>
                    </div>
                    <div class="second-checkbox">    
                        <label for="porter">Je veux proposer</label>
                        <input type="radio" name="porter" id="ProposerCheck">
                    </div>
                </div>

                <div class="tab-content">
                    <div class="tab-porter" id="tab-porter">
                        <form action="/Search.php" method="get" class="search-home">
                            <div class="firstPart">
                                <i style="font-size: 1rem; margin-left: 5px;" class="pi pi-search" />
                                <input class="departInput" type="text" name="" id="" placeholder="Départ">
                            </div>
                            <div class="vertical-line-search">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 172 172" style=" fill:#000000;">
                                    <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                                        <path d="M0,172v-172h172v172z" fill="none"></path>
                                        <g fill="#95a5a6">
                                            <path d="M85.88802,14.23535c-3.95253,0.06178 -7.10881,3.312 -7.05469,7.26465v129c-0.03655,2.58456 1.32136,4.98858 3.55376,6.29153c2.2324,1.30295 4.99342,1.30295 7.22582,0c2.2324,-1.30295 3.59031,-3.70697 3.55376,-6.29153v-129c0.02653,-1.93715 -0.73227,-3.80254 -2.10349,-5.17112c-1.37122,-1.36858 -3.23806,-2.12378 -5.17516,-2.09353z">
                                            </path>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div class="firstPart">
                                <i class="pi pi-search" />
                                <input class="destinationInput" type="text" name="" id="" placeholder="Destination">
                            </div>

                            <div class="vertical-line-search">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 172 172" style=" fill:#000000;">
                                    <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                                        <path d="M0,172v-172h172v172z" fill="none"></path>
                                        <g fill="#95a5a6">
                                            <path d="M85.88802,14.23535c-3.95253,0.06178 -7.10881,3.312 -7.05469,7.26465v129c-0.03655,2.58456 1.32136,4.98858 3.55376,6.29153c2.2324,1.30295 4.99342,1.30295 7.22582,0c2.2324,-1.30295 3.59031,-3.70697 3.55376,-6.29153v-129c0.02653,-1.93715 -0.73227,-3.80254 -2.10349,-5.17112c-1.37122,-1.36858 -3.23806,-2.12378 -5.17516,-2.09353z">
                                            </path>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            
                            <div class="secondPart">
                                <i style="font-size: 1rem" class="pi pi-calendar"></i>
                                <input class="dateInput" type="date" name="" id="" >
                            </div>
                            
                            <!-- <hr class="hr-test"> -->
                            <div class="vertical-line-search">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 172 172" style=" fill:#000000;">
                                    <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                                        <path d="M0,172v-172h172v172z" fill="none"></path>
                                        <g fill="#95a5a6">
                                            <path d="M85.88802,14.23535c-3.95253,0.06178 -7.10881,3.312 -7.05469,7.26465v129c-0.03655,2.58456 1.32136,4.98858 3.55376,6.29153c2.2324,1.30295 4.99342,1.30295 7.22582,0c2.2324,-1.30295 3.59031,-3.70697 3.55376,-6.29153v-129c0.02653,-1.93715 -0.73227,-3.80254 -2.10349,-5.17112c-1.37122,-1.36858 -3.23806,-2.12378 -5.17516,-2.09353z">
                                            </path>
                                        </g>
                                    </g>
                                </svg>
                            </div>

                            <div class="secondPart">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M12.23 15.5c-6.801 0-10.367-1.221-12.23-2.597v9.097h24v-8.949c-3.218 2.221-9.422 2.449-11.77 2.449zm1.77 2.532c0 1.087-.896 1.968-2 1.968s-2-.881-2-1.968v-1.032h4v1.032zm-14-8.541v-2.491h24v2.605c0 5.289-24 5.133-24-.114zm9-7.491c-1.104 0-2 .896-2 2v2h2v-1.5c0-.276.224-.5.5-.5h5c.276 0 .5.224.5.5v1.5h2v-2c0-1.104-.896-2-2-2h-6z"/>
                                </svg>
                                <input class="numberInput" type="number" placeholder="Bagage" name="" id="">
                            </div>

                            <div class="vertical-line-search">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 172 172" style=" fill:#000000;">
                                    <g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                                        <path d="M0,172v-172h172v172z" fill="none"></path>
                                        <g fill="#95a5a6">
                                            <path d="M85.88802,14.23535c-3.95253,0.06178 -7.10881,3.312 -7.05469,7.26465v129c-0.03655,2.58456 1.32136,4.98858 3.55376,6.29153c2.2324,1.30295 4.99342,1.30295 7.22582,0c2.2324,-1.30295 3.59031,-3.70697 3.55376,-6.29153v-129c0.02653,-1.93715 -0.73227,-3.80254 -2.10349,-5.17112c-1.37122,-1.36858 -3.23806,-2.12378 -5.17516,-2.09353z">
                                            </path>
                                        </g>
                                    </g>
                                </svg>
                            </div>

                            <div class="secondPart">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M12.23 15.5c-6.801 0-10.367-1.221-12.23-2.597v9.097h24v-8.949c-3.218 2.221-9.422 2.449-11.77 2.449zm1.77 2.532c0 1.087-.896 1.968-2 1.968s-2-.881-2-1.968v-1.032h4v1.032zm-14-8.541v-2.491h24v2.605c0 5.289-24 5.133-24-.114zm9-7.491c-1.104 0-2 .896-2 2v2h2v-1.5c0-.276.224-.5.5-.5h5c.276 0 .5.224.5.5v1.5h2v-2c0-1.104-.896-2-2-2h-6z"/>
                                </svg>
                                <input class="numberInput" type="number" placeholder="Poids" name="" id="">
                            </div>
                            <button  class="submit-search" type="submit">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="search-home-svg" width="24" height="24" aria-hidden="true">
                                    <g fill="none" stroke="#158CAD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10">
                                        <line x1="22" y1="22" x2="16.4" y2="16.4"></line>
                                        <circle cx="10" cy="10" r="9"></circle>
                                    </g>
                                </svg>
                            </button> 
                                
                        </form>
                    </div>



                </div>
                <hr>

                <h3 class="Phrase-Slogan">Phrase de slogan</h3>
            </div>


        </div>
        

    </section>
</template>

<script>

import InputNumber from 'primevue/inputnumber';

export default {
    components: {InputNumber},
    data(){
        return {
            depart: "",
            destination: "",
            weight: 0,
            bagage: 0,
            date: 0
        }
    }
    

}
</script>



<style scoped>
@font-face {
    font-family: PatrickHand;
    src: url(../assets/fonts/PatrickHand-Regular.ttf);
}
section.home-section
{
    padding-top: 60px;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../assets/images/illustration-motion-movici-travelling.jpg) no-repeat fixed 50% 50%;
    background-size: cover;
    height: 450px;
    display: flex;
    justify-content: center;
    text-align: center;
    font-family: 'PatrickHand', monospace;

}

.container-home
{
    display: grid;
    position: relative;
    background-color: #3ab4d5;
    border-radius: 15px;
    justify-content: center;
    width: 1050px;
    height: 240px;
    padding-bottom: 10px;
    margin-bottom: 5px;
    align-items: center;
    margin-top: 115px;

    
}

.contenu-home h1
{
    text-align: center;
    font-size: 3rem;
    color: white;
    /*text-shadow: 2px 0 0 white, -2px 0 0 White, 0 2px 0 white, 0 -2px 0 White, 1px 1px White, -1px -1px 0 White, 1px -1px 0 #f08b66, -1px 1px 0 #f08b66;
    */
    margin-bottom: 10%;
    margin-top: 10%;
    
}

.contenu-home
{
    position: relative;
    width: 100%;
    max-width: 1150px;
    display: grid;
    justify-content: center;
    padding: 0px 24px;
}
.container-home-search hr {
    width: 900px;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: 30px;

}


.vertical-line-svg{
    display: flex;
    height: 24px;
    width: 20px;
    
}


/*   ********************   */ 

.list-tab
{
    display: flex;
    margin-bottom: 10px;
    margin-top: 10px;
    justify-content: space-evenly;

}

.list-tab label
{
    /* font-family: 'ChalkBoard', sans-serif; */
    color: white;
    font-size: 1.5rem;
    transition: 0.5s;
    text-decoration: none;
    margin-left: 20px;
    font-weight: 700;
}
.list-tab a:hover
{
    color: var(--Tertiary-Color);
}

.list-tab input
{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

  border-radius: 50%;
  width: 16px;
  height: 16px;

  border: 2px solid #999;
  transition: 0.2s all linear;
  margin-right: 5px;

  position: relative;
  top: 4px;
}
.list-tab input:checked {
    border: 6px solid black;
  }

form.search-home
{
    /*position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%); */
    position: relative;
    width: 960px;
    height: 56px;
    box-sizing: border-box;
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1pt 4pt, rgba(0, 0, 0, 0.08) 0px 2pt 8pt;
    border-radius: 16px;
    padding: 8px 0px 8px 8px;
    /*margin-left: 45px;
    margin-top: 80px;*/
    justify-content: center;
    -moz-box-align: center;
    align-items: center;
    display: flex; 
    
    text-align: center;
    border: 5px solid var(--Tertiary-Color);
}


.vertical-line-search
{
    display: flex;
    height: 40px;
    width: 32px;
    text-align: center;
    align-items: center;
    
}



/* *************************  */
.submit-search
{
    position: relative;
    background-color: var(--Tertiary-Color);
    border: none;
    border-radius: 0px 16px 16px 0px;
    font-weight: 500;
   /* box-shadow: 0px 15px 20px black; */
    cursor: pointer;
    height: 56px;
    justify-content: center;
    width: 88px;
    transition: 0.3s;
    left: 1px;
}
/*.submit-search:hover
{
    background-color: #1f4b72;

}*/

/* ################ Phrase-slogan ################ */
h3.Phrase-Slogan
{
    /* font-family: 'ChalkBoard', sans-serif; */
    color: white;
    font-size: 1.3rem;
    margin-top: 5px;
    font-weight: 1000;
    margin-bottom: 5px;
    
}

.dateInput{
    outline: none;
    border: none;
    height: 45px;
    width: 134px;
    margin-left: 10px;
}

.numberInput{
    outline: none;
    border: none;
    height: 45px;
    width: 104px;
    margin-left: 10px;
}


.departInput, .destinationInput{
    height: 45px;
    border: none;
    outline: none;
    margin-left: 10px;
}
input.departInput::placeholder, input.destinationInput::placeholder, input.dateInput::placeholder,
input.numberInput::placeholder{
  color: #333;
}


.firstPart{
    height: 45px;
    width: 200px;
    display: flex;
    align-items: center;
}
.secondPart{
    width: 150px;
    height: 45px;
    display: flex;
    align-items: center;
}
.thirdPart{
    width: 120px;
    height: 45px;
    display: flex;
    align-items: center; 
}

</style>
