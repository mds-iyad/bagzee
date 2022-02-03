<template>
    <article class="entourage-first-section">
        <div class="container-first-section">
            <div class="title-first-section">
                <h1>Ils parlent de nous</h1>
            </div>
            <div class="first-section">
                <div class="text-presentation">
                    <a href="">
                        <img src="../assets/images/LePoint.png" alt="" width="200px" height="100px">
                    </a>
                </div>
                <div class="text-presentation">
                    <a href="#">
                        <img src="../assets/images/RMC.jpg" alt="" width="300px" height="200px">
                    </a>
                </div>
                <div class="text-presentation">
                    <a href="#">
                        <img src="../assets/images/TF1.svg.webp" alt="" width="200px" height="100px">
                    </a>
                </div>
            </div>
        </div>
    </article>
</template>


<style scoped>
@font-face {
    font-family: PatrickHand;
    src: url(../assets/fonts/PatrickHand-Regular.ttf);
}
article.entourage-first-section
{
    padding: 24px 24px 48px;
    justify-content: center;
    display: grid;
    justify-content: center;
}

.container-first-section{
    width: 1050px;
}


.title-first-section h1
{
    font-family: 'PatrickHand', sans-serif, monospace;
    text-align: center;
    font-weight: 1000;

    font-size: 3rem;
    margin-bottom: 50px;

}

.first-section{
    display: flex;
    width: auto;
    height: auto;
    justify-content: space-evenly;
    align-items: center;
    vertical-align: baseline;    
    
}



.text-presentation p{
    
    border-color: lightgray;
    box-shadow: 10px 5px 5px lightgray;
    height: 100px;
    padding: 10px;
    width: 250px;
    text-align: center;
    font-weight: 800;
    font-family: 'Kanit', sans-serif;
}

#transport{
    left: 25%;
}

#point-relais-icon{
    width: 75px;
    height: 75px;
    margin-bottom:15px;
    margin-top: 15px;
}
</style>