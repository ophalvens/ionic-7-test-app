<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Experimento Patronum! <ion-icon :icon="colorWand"></ion-icon></ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 3</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>

        <ion-item>
          <ion-label slot="start">Expecto experimento</ion-label>
          <ion-icon :icon="colorWand" size="large" slot="end"></ion-icon>
        </ion-item>
        <ion-item>
          <ion-label>Darkmode</ion-label>
          <ion-toggle slot="end" :checked="false" name="darkmode"></ion-toggle>

        </ion-item>


      </ion-list>

    </ion-content>
  </ion-page>
</template>

<script setup>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonIcon, IonToggle } from '@ionic/vue';
import { colorWand } from 'ionicons/icons';
</script>


<style scoped>
  ion-icon {
    color:darkgoldenrod;
  }
</style>