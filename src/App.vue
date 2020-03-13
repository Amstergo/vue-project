<template>
  <v-app>
    <v-navigation-drawer
      app
      temporary
      v-model="drawer"
      class="hidden-md-and-up"
    >
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.url"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="onLogout" v-if="isUserLoggedIn">
          <v-list-item-icon>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title
        ><router-link to="/" tag="span" class="pointer"
          >Page title</router-link
        ></v-toolbar-title
      >

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-for="item of items" :key="item.title" :to="item.url" text>
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
        <v-btn text @click="onLogout" v-if="isUserLoggedIn">
          <v-icon left>mdi-exit-to-app</v-icon>
          Logout
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>

    <!-- snake errors -->
    <template v-if="error">
      <v-snackbar
        :timeout="5000"
        :bottom="true"
        :right="true"
        :multi-line="true"
        color="error"
        @input="closeError"
        :value="true"
      >
        {{ error }}
        <v-btn dark text @click="closeError">
          Close
        </v-btn>
      </v-snackbar>
    </template>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => ({
    drawer: false
  }),
  computed: {
    ...mapGetters("common", ["error"]),
    ...mapGetters("user", ["isUserLoggedIn"]),
    items() {
      if (this.isUserLoggedIn) {
        return [
          { title: "Orders", icon: "mdi-bookmark_border", url: "/orders" },
          { title: "New ad", icon: "mdi-note_add", url: "/new" },
          { title: "My ads", icon: "mdi-list", url: "/list" }
        ];
      }

      return [
        { title: "Login", icon: "mdi-lock", url: "/login" },
        { title: "Registration", icon: "mdi-face", url: "/registration" }
      ];
    }
  },
  methods: {
    closeError() {
      this.$store.dispatch("common/clearError");
    },
    onLogout() {
      this.$store.dispatch("user/logoutUser");
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>
