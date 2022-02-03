<template>
    <section class="page-professionnels-container">

    <!-- fils d'ariane -->
        <Breadcrumb :home="home" :model="items" />

        <div class="page-professionnels-content">
            <div style="padding-bottom:50px;" class="container">
                <div style="display:flex; justify-content:space-between;">
                    <h3>TRANSPORTEURS PROFESSIONNELS</h3>
                    <img height="83px" src="../assets/images/transporteurs.png" alt="">
                </div>
                <p>Afin de faciliter le transport de bagage, nous vous proposons UNE solution de transport gagant-gagnant vous assurant revenus, confiance et practicité.</p>
                <div style="display:flex; align-items: center; padding:20px">
                    <div style="display:grid; text-align:center; width:50%;">
                        <p>N'HÉSITEZ-PLUS !</p>
                        <span style="font-size:4.5rem; color:white; text-shadow:2px 0 0 #2accfa, -2px 0 0 #2accfa, 0 2px 0 #2accfa, 0 -2px 0 #2accfa, 1px 1px #2accfa, -1px -1px 0 #2accfa, 1px -1px 0 #2accfa, -1px 1px 0 #2accfa;">DEVENEZ L'UN DE NOS BAGTEUR PRO</span>
                        <p style="text-decoration:underline; color:#fb6e4a;">Bagteur Pro (transporteur professionnel)</p>
                    </div>
                    <p style="width:50%">Votre mission : récupérer un bagage, colis oumarchandise d'un particulier ou d'un professionnel, enmain propre, à domicile ou en point relais afin del'acheminer par le moyen de locomotion de votre choixet de le livrer dans le lieu que vous aurez convenu.</p>
                </div>
                <div style="display:flex; align-items:center; justify-content:space-between;">
                    <div style="text-align:center;">
                        <p>Après ça ? Vous recevrez une rémunération pour service rendu !<br> 
                        A vous de choisir ou de négocier chacune des ces options !<br></p>
                        <p style="color:#2accfa;">C'est parti avec Bagzee !</p>
                    </div>
                    <img style="margin-right: 112px;" src="../assets/images/illustration2.png" alt="">
                </div>
            </div>


            <div style="padding-bottom:50px;" class="container">
                <h3>LIVREURS PROFESSIONNELS</h3>
                <p>Afin de vous créer une nouvelle activité, nous vous proposons UNE collaboration gagant-gagnant vous assurant revenus, mobilité et fluidité.</p>
                <div style="display:flex; padding-top:15px;">
                    <div style="display:grid; justify-items:center; width:57%;">
                        <p style="width:90%">Votre mission : récupérer un bagage, colis ou marchandise d'un particulier ou d'un professionnel, en main propre, à domicile ou en point relais afin de le livrer, par le moyen de locomotion de votre choix, dans le lieu que vous aurez convenu.</p>
                        <img src="../assets/images/illustration2.png" alt="">
                    </div>
                    <div style="display:grid; text-align:center; width:43%;">
                        <p>N'HÉSITEZ-PLUS !</p>
                        <span style="font-size:4.3rem; color:white; text-shadow:2px 0 0 #2accfa, -2px 0 0 #2accfa, 0 2px 0 #2accfa, 0 -2px 0 #2accfa, 1px 1px #2accfa, -1px -1px 0 #2accfa, 1px -1px 0 #2accfa, -1px 1px 0 #2accfa;">DEVENEZ L'UN DE NOS BAGVEUR PRO</span>
                        <p style="text-decoration:underline; color:#fb6e4a;">Bagveur Pro (livreur professionnel)</p>
                        <p style="margin-top:20px; font-size: 23.5px; text-align:initial;">Après ça ? Vous recevrez une rémunération pour service rendu ! A vous de choisir ou de négocier chacune des ces options !</p>
                        <p style="color:#2accfa; text-align:initial;">C'est parti avec Bagzee !</p>
                    </div>
                </div>
            </div>

            <div style="padding-bottom:50px;" class="container">
                <h3>POINT RELAIS</h3>
                <p>Afin de développer un nouveau partenariat, nous vous proposons UNE association gagant-gagnant vous assurant revenus, proximité et sécurité.</p>
                <div style="display:flex; padding-top:15px;">
                    <div style="display:grid; text-align:center; width:48%;">
                        <p>N'HÉSITEZ-PLUS !</p>
                        <span style="font-size:4.5rem; color:white; text-shadow:2px 0 0 #fb6e4a, -2px 0 0 #fb6e4a, 0 2px 0 #fb6e4a, 0 -2px 0 #fb6e4a, 1px 1px #fb6e4a, -1px -1px 0 #fb6e4a, 1px -1px 0 #fb6e4a, -1px 1px 0 #fb6e4a;">DEVENEZ L'UN DE NOS POINTS-RELAIS</span>
                        <p style="margin-top:20px; font-size: 23.5px; text-align:initial;">Après ça ? Vous recevrez une rémunération 2 à 3 fois supérieur au prix pratiqué sur le marché ! <br>
                            A vous de libérer de l'espace pour un max de bagage !
                        </p>
                        <p style="color:#2accfa; text-align:initial;">C'est parti avec Bagzee !</p>
                    </div>
                    <div style="display:grid; justify-items:center; width:52%">
                        <p style="width:90%;">Votre mission : récupérer un bagage, colis ou marchandise d'un particulier ou d'un professionnel, vérifier son contenu, le stocker en sécurité et le donner au prochain porteur après vérification.</p>
                        <img src="../assets/images/illustration2.png" alt="">
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>


<script>

import Breadcrumb from 'primevue/breadcrumb'

export default {
    components:{Breadcrumb},
    data() {
        return {
            home: {icon: 'pi pi-home', to: '/'},
            items: [
                {label: 'Professionnels'}
            ]
        }
    }
}
</script>



<style scoped>
.page-professionnels-container{
    padding-top: 60px;
    display: grid;
    justify-content: center;

}

.page-aboutus-container h3{
    font-weight:1000; 
    font-size:28px;
    font-family: 'Kanit', sans-serif;
    
}
.page-aboutus-container p{
    font-weight:700;
    font-size:22px;
}
.page-professionnels-container h3{
    font-weight:1000; 
    font-size:27px;
    margin-bottom: 20px;
    font-family: 'Kanit', sans-serif;
}
.page-professionnels-container p{
    font-weight:700;
    font-size:24px;
}


</style>

<style>
.page-professionnels-content{
    width: 1140px;
    font-family: 'PatrickHand', courier, monospace;
}
</style>