<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-img :src="ad.imageSrc" height="300px"></v-img>
          <v-card-text>
            <h1 class="text--primary" flat>{{ ad.title }}</h1>
            <p class="">
              {{ ad.description }}
            </p>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn class="warning">Edit</v-btn>
            <v-btn class="success">Buy</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: ["id"],
  computed: {
    ...mapGetters("ads", ["adById"]),
    ad() {
      const id = this.id;
      return this.adById(id);
    }
  }
};
</script>

<style scoped></style>
