<template>
    <footer class="footer">
        <div class="container-footer">
            <div class="row">
                <div class="footer-col">
                    <h4>BAGZEE</h4>
                    <ul>
                        <li><a href="#">A propos de nous</a></li>
                        <li><a href="#">Nos services</a></li>
                        <li><a href="#">Nos programmes</a></li>
                        <li><a href="#">Mentions légals</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4>Aide</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Service client</a></li>
                        <li><a href="#">Annnuler une commande</a></li>
                        <li><a href="#">Suivre son colis</a></li>
                        <li><a href="#">Moyen de paiement</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4>test</h4>
                    <ul>
                        <li><a href="#">Test-1</a></li>
                        <li><a href="#">Test-2</a></li>
                        <li><a href="#">Test-3</a></li>
                        <li><a href="#">Test-4</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4>Suivez-nous!</h4>
                    <div class="social-media">
                        <a target="_blank" href="https://www.facebook.com/"><i style="font-size: 1rem" class="pi pi-facebook"></i></a>
                        <a target="_blank" href="https://www.twitter.com/"><i style="font-size: 1rem" class="pi pi-twitter"></i></a>
                        <a target="_blank" href="https://www.instagram.com/"><i style="font-size: 1rem" class="pi pi-instagram"></i></a>
                        <a target="_blank" href="https://www.linkedin.com/"><i style="font-size: 1rem" class="pi pi-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>


  export default {
    data: () => ({
    }),
  }
</script>



<style scoped>
ul{
    padding: 0;
    padding-left: 8px;
}
.footer{
    background-color: #24262b;
    padding: 70px 0;
    font-family: 'Poppins', sans-serif;
}

.container-footer{
    /* background-color: #e73e01;*/
    max-width: 1170px;
    margin: auto;
}

.row{
    display: flex;
    flex-wrap: wrap;
}


ul{
    list-style: none;

}

.footer-col{
    position: relative;
    width: 25%;
    padding: 0 15px;
    text-align: start;
}

.footer-col h4{
    position: relative;
    font-size: 18px;
    color: #ffffff;
    text-transform: capitalize;
    margin-bottom: 30px;
    font-weight: 500;
}

.footer-col h4::before{
    position: absolute;
    content: '';
    left: 0;
    bottom: -10px;
    background-color: var(--Tertiary-Color);
    height: 2px;
    box-sizing: border-box;
    width: 50px;
}

.footer-col ul li::not(:last-child){
    margin-bottom: 10px;
}

.footer-col ul li a{
    font-size: 16px;
    text-transform: capitalize;
    color: #ffffff;
    text-decoration: none;
    font-weight: 300;
    color: #bbbbbb;
    display: block;
    margin-bottom: 5px;
    transition: all 0.3s ease;
}
.footer-col ul li a:hover{
    color: #ffffff;
    padding-left: 8px;
}

.social-media
{
    display: flex;
}

.footer-col .social-media a{
    display: inline-block;
    height: 40px;
    width: 40px;
    background-color: rgb(255, 255, 255,0.2);
    margin: 0 10px 10px 0;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    color: #ffffff;
    transition: all 0.5s ease;
}

.footer-col .social-media a:hover{
    color: #24262b;
    background-color: #ffffff;
}

/* ################## responsive ################## */

@media(max-width: 767px){
    .footer-col {
        width: 50%;
        margin-bottom: 30px;
    }
}

@media(max-width: 574px){
    .footer-col {
        width: 100%;
        margin-bottom: 30px;
    }
}
</style>