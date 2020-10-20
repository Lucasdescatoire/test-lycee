<template>
  <div class="page-container">
    <md-app md-mode="reveal">
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Objectif Bac 2021</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">Menu</md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>send</md-icon>
            <a href="App.vue"><span class="md-list-item-text">Accueil</span></a>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <a href="menu1.vue"
              ><span class="md-list-item-text">le lycée</span></a
            >
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <a href="menu2.vue"
              ><span class="md-list-item-text">Objectif BAC 2021</span></a
            >
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <a href="menu3.vue"
              ><span class="md-list-item-text">la rentrée</span></a
            >
          </md-list-item>
          <md-list-item>
            <md-icon>send</md-icon>
            <a href="menu4.vue"
              ><span class="md-list-item-text">Baccalauréat</span></a
            >
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <a href="menu5.vue"><span class="md-list-item-text">BTS</span></a>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <a href="menu6.vue"
              ><span class="md-list-item-text">prepa PTSI</span></a
            >
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <a href="menu7.vue"
              ><span class="md-list-item-text">contact</span></a
            >
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <p>Voici une vidéo pour comprendre le deroulement du BAC 2021</p>
        <video
          src="https://www.youtube.com/watch?v=TNzvEbJdNPY&feature=emb_title"
          width="320"
          height="240"
          controls
          poster="vignette.jpg"
        ></video
        ><br />
        <p></p>
        <p></p>
        <p></p>
        <p>diaporama</p>
        <a
          href="https://view.genial.ly/5c0637826f191d2ca33a5640/interactive-content-1"
        >
          <img
            alt=""
            align="center"
            src="http://lycee-europe-dunkerque.fr/userfiles/images/rentree_2019/visu_diapo_2019.jpg"
            width="250"
            height="130"
          />
        </a>
        <p></p>
        <p></p>
        <p>plaquette</p>
        <a
          href="https://drive.google.com/file/d/1MhvRlbdAM-jkkF9nGZ-R-zJLUeh7xrwZ/view"
        >
          <img
            alt=""
            align="center"
            src="http://lycee-europe-dunkerque.fr/userfiles/images/rentree_2019/visu_plaq_SG_01.png"
            width="250"
            height="130"
          />
        </a>
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