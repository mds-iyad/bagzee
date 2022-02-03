<template>
<section class="page-aboutus-container">
    <Breadcrumb :home="home" :model="items" />

    <!-- <Breadcrumb :home="home" :model="items">
      <template #item="{item}">
          <router-link :to="item.to" custom v-slot="{href, route, navigate, isActive, isExactActive}">
              <a :href="href" @click="navigate" :class="{'active-link': isActive, 'active-link-exact': isExactActive}">{{route.fullPath}}</a>
          </router-link>
      </template>
    </Breadcrumb> -->


    <div style="padding-bottom:50px;" class="aboutUs-content">
      <div style="padding-bottom:40px;" class="container">
        <h3>LE COBAGAGE, QU'EST CE QUE C'EST?</h3>
        <p style="margin-left:6px;">Le cobagage est la prise en charge, l'acheminement et la livraison de votre bagage (colis ou marchandise) à domicile, en main propore ou en point relais par un voyageur (particulier ou professionnel) avant, pendant ou après votre déplacement par divers moyens de locomotions pour un coût plus économique, écologique, rapide et sécurisé.</p>

        <div class="cobagage-illustration">
          <img style="margin-left:-3%" src="../assets/images/illustration.png" alt="" srcset="">
          <span>Illustration en image de l'action de cobagage.</span>
        </div>
      </div>


      <div class="container">
        <h3>VOUS ÊTES BAGZEE (VOUS PROPOSEZ UN BAGAGE À PORTER):</h3>
        <p style="font-size:22px; margin-left:6px; font-weight:700;">Et si, on pouvait un supplément de bagage onéreux ? Nous vous proposons LA solution collaborative vous garantissant économies, simplicité et confiance.</p>

        <div style="display:flex; justify-content:space-between;">
          <div style="display:grid; margin-left:10px; font-weight:700;">
            <span>Une surcharge de bagages ?</span>
            <span>Materiel pro ?</span>
            <span>Achats imprévus ?</span>
            <span>Cadeaux ?</span>
            <span>Livraison urgente ? Animaux ?</span>
            <span>Déménagement ?</span>
          </div>
          <img src="../assets/images/illustration2.png" alt="" srcset="">
        </div>
      </div>


      <div style="padding-bottom:40px;" class="container">
        <h3 style="font-weight:1000; font-size:28px; color:#fb6e4a;">Votre mission</h3>
        <p style="font-weight:700;">
        Confiez votre bagage, colis ou marchandise à un particulier ou un transport privé, en main propre, à domicile ou en point relais afin que ce membre l'achemine par un moyen de locomotion de son choix et que sa livraison se fasse dans le lieu que vous aurez convenu.
        <br>
        A vous de choisir ou de négocier chacune de ces options !
        <br>
        <span style="color:#2accfa">C'est parti avec Bagzee !</span>
        </p>
      </div>

      <div class="container">
        <h3>VOUS ÊTES BAGZEUR (VOUS PROPOSEZ DE PORTER UN BAGAGE):</h3>
        <p>
        Financer vos trajets, arrondir vos fin de mois ou faire du business, nous vous proposons UNE opportunité gagnant-gagnant vous assurant revenus, fluidité et sécurité.
        </p>
        <img style="margin-left:-50px" src="../assets/images/mission.png" alt="" srcset="">
      </div>

      <div class="container">
        <h3 style="color:#fb6e4a;">Votre mission</h3>
        <p>
        Récupérer un bagage, colis ou marchandise d'un particulier ou d'un professionnel, en main propre, à domicile ou en point relais afin de l'acheminer par le moyen de la locomotion de votre choix et de le livrer dans le lieu que vous aurez convenu. Après ça ? Vous recervrez une rénumération pour service rendu !        <br>
        A vous de choisir ou de négocier chacune de ces options !
        <br>
        <span style="color:#2accfa">C'est parti avec Bagzee !</span>
        </p>
      </div>

    </div>
  </section>  

</template>


<script>
import Breadcrumb from 'primevue/breadcrumb'

export default {
  components:{ Breadcrumb },
  data() {
      return {
          home: {icon: 'pi pi-home', to: '/'},
          items: [
              {label: 'Community'}
          ]
      }
  }
}
</script>

<style scoped>

@font-face {
    font-family: PatrickHand;
    src: url(../assets/fonts/PatrickHand-Regular.ttf);
}

.page-aboutus-container{
    padding-top: 60px;
    display: grid;
    justify-content: center;
    font-family: 'PatrickHand', courier, monospace;
}
.aboutUs-content{
    width: 1098px;
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

</style>

<style>
.p-breadcrumb.p-component{
    background-color: #f5f5f5;;
}
.p-breadcrumb ul li.p-breadcrumb-chevron {
  margin: 0 0.5rem 0 0.5rem;
  color: var(--Tertiary-Color);
}
/* span.p-menuitem-text{
    color: var(--Primary-Color) !important;
} */

span.p-menuitem-text:hover{
  color: var(--Tertiary-Color) !important;
  text-decoration: underline;
}



.p-breadcrumb ul li .p-menuitem-link .p-menuitem-icon {
  color: var(--Primary-Color) !important;
}

</style>