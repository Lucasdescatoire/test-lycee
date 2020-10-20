<template>
  <div class="page-container">
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Prepa PTSI</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">Menu</md-toolbar>

       <md-list>
          <md-list-item>
            <md-icon>send</md-icon>
            <a href ="App.vue"><span class="md-list-item-text">Accueil</span></a>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <a href ="menu1.vue"><span class="md-list-item-text">le lycée</span></a>
            
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
           <a href ="menu2.vue"><span class="md-list-item-text">Objectif BAC 2021</span></a>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <a href ="menu3.vue"><span class="md-list-item-text">la rentrée</span></a>
          </md-list-item>
          <md-list-item>
            <md-icon>send</md-icon>
            <a href ="menu4.vue"><span class="md-list-item-text">Baccalauréat</span></a>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
           <a href ="menu5.vue"><span class="md-list-item-text">BTS</span></a>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <a href ="menu6.vue"><span class="md-list-item-text">prepa PTSI</span></a>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <a href ="menu7.vue"><span class="md-list-item-text">contact</span></a>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        
    
      <img alt="" align="center" src="http://lycee-europe-dunkerque.fr/userfiles/images/labels/prepas.png"  width="220" height="175" />
 <p> </p>
 <img alt="" align="center" src="http://lycee-europe-dunkerque.fr/userfiles/images/prepas/LOGO_vert%20(1).png"  width="220" height="175" />
 <p><span class="md-title"><span class="vert">Choisir sa prépa scientifique</span></span></p>
 <p>Faire une prépa PT est un choix intelligent et audacieux qui vous permet de vous propulser vers des métiers d’avenir. </p>  
 <p>- Les métiers scientifiques sont passionnants : conception, création, innovation. L’ingénieur façonne et améliore le monde qui nous entoure.</p>
 <p> <span class="md-body-2">-Le marché technologique</span> est en pleine explosion, imaginez ne serait-ce qu’une seconde un monde sans voiture, téléphone, ordinateur, électricté.</p>
<p>-La prépa PTSI-PT est la voie royale pour déboucher sur des <span class="md-body-2">métiers reconnus et bien rémunérés.</span></p>
<p>-Il s’agit d’une<span class="md-body-2"> formation scientifique </span>solide ouvrant les portes d’une orientation future vers des métiers relationnels, de conseil ou de direction.</p>
<p>-Le prix de la formation dans les Ecoles est très faible comparé à d’autre types de formations supérieures.</p>
<p>-En résumé, la prépa PT est une filière <span class="md-body-2">d’excellence</span> dont le débouché est quasiment certain pour les élèves sérieux.</p>
<p><span class="md-title"><span class="vert">Spécificités des matières en PT par rapports aux autres prépas</span></span></p>
<p>L’objectif des Classes Préparatoires Technologiques PTSI (Physique, Technologie et Sciences de l’Ingénieur) est à la fois :</p>
<p>-traditionnel par une <span class="md-body-2">formation solide</span> dans les matières de base (mathématiques, physique, chimie et langues)</p>
<p>-spécifique par la prédominance accordée à la notion de<span class="md-body-2"> conception</span> et d’<span class="md-body-2">innovation.</span></p>
<p>Le contenu scientifique et technique de la formation PTSI a pour but de permettre de s’adapter à un <span class="md-body-2">marché technologique</span> en évolution incessante et en pleine expansion, ne serait-ce que dans le domaine des <span class="md-body-2">technologies de l’information.</span></p>
<p>La filière PTSI-PT s’ouvre à un large éventail de concours, dont le plus important est " la Banque National d’épreuves PT ". Les écoles les plus prestigieuses (Arts et Métiers, Polytechnique, ENS Cachan, Télécom Paris, ...) recrutent sur ce concours pour former des <span class="md-body-2">ingénieurs aptes à imaginer et à réaliser ce que sera le monde de demain.</span></p>
<p><span class="md-title"><span class="vert">La prépa PTSI PT du lycée de l'Europe</span></span></p>
<p>Pour avoir plus d'informations sur la prépa PTSI PT et ses débouchés, découvrez notre <span class="md-body-2">site internet.</span></p>
<a href="https://prepas.lycee-europe-dunkerque.fr/"> <img alt="" align="center" src="http://lycee-europe-dunkerque.fr/userfiles/images/prepas/logo_vert.png"  width="250" height="130" /> </a>
 <p> <span class="md-title"><span class="vert">L'immersion en PTSI</span></span></p>
<p>Vous vous demandez si vous êtes fait pour la prépa? Vous êtes intéressé par la prépa PTSI PT du lycée de l'Europe? Vous voulez découvrir nos locaux et nos équipes? Vous voulez découvrir la vie et les études en classes préparatoires PTSI?</p>
<p><span class="md-Subheading"><span class="rouge">Venez partager une journée en immersion avec les étudiants de PTSI!</span></span></p>
     <a href=" https://prepas.lycee-europe-dunkerque.fr/cpge-europe/immersion-en-ptsi/"> <img alt="" align="center" src="http://lycee-europe-dunkerque.fr/userfiles/images/prepas/immersion_ptsi.png"  width="250" height="130" /> </a>
    
     </md-app-content>
    </md-app>
  </div>
</template>

<style lang="scss" scoped>
.md-app {
  max-height: 2000px;
}

// Demo purposes only
.md-drawer {
  width: 260px;
  max-width: calc(100vw - 125px);
}
.vert {
  color: green;
  /* on pourrait aussi utiliser 
  color: rgb(255, 128, 0); */
}
.rouge {
  color: red;
  /* on pourrait aussi utiliser 
  color: rgb(255, 128, 0); */
}
</style>


<script>
export default {
  name: "Reveal",
  data: () => ({
    menuVisible: false,
  }),
};
</script>