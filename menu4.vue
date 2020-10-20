<template>
  <div class="page-container">
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Les Baccalauréats (rentrée 2019)</span>
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
        <img alt="" align="center" src="http://lycee-europe-dunkerque.fr/userfiles/images/habillage/article/diplome%20bac.jpg"  width="120" height="75" />
       <p> Le lycee de l'EUROPE de DUNKERQUE prépare aux baccalauréats suivants :</p>

<p>Baccalauréat Général</p>
<p>Bac STI2D - série Sciences et Technologies Industrielles et du Dévelloppement Durable</p>
<p>Spécialité Architecture et Construction  (AC)</p>
<p>Spécialité Energies et Environnement  (EE)</p>
<p>Spécialité Innovation Technologique et Eco-Conception (ITEC)</p>
<p>Spécialité Système d'Information et Numérique (SIN) </p>
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
.card-expansion {
  height: 480px;
}

.md-card {
  width: 320px;
  margin: 4px;
  display: inline-block;
  vertical-align: bottom;
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