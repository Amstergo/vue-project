<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">My ads</h1>
        <v-card class="elevation-10 mb-5" v-for="ad in myAdsList" :key="ad.id">
          <v-layout row>
            <v-flex xs4>
              <v-img :src="ad.imageSrc" height="160px"> </v-img>
            </v-flex>
            <v-flex xs8>
              <v-card-text>
                <h2 class="text--primary">{{ ad.title }}</h2>
                <p>{{ ad.description }}</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn class="info mr-3" :to="'/ad/' + ad.id">Open</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("ads", ["myAds"]),
    myAdsList() {
      return this.myAds;
    }
  }
};
</script>

<style scoped></style>
