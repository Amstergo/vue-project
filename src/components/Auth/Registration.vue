<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="6">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Registration form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form v-model="valid" ref="form" lazy-validation>
                  <v-text-field
                    label="Email"
                    name="email"
                    prepend-icon="mdi-account"
                    type="email"
                    v-model="email"
                    :rules="emailRules"
                  />

                  <v-text-field
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    v-model="password"
                    type="password"
                    :counter="6"
                    required
                    :rules="passwordRules"
                  />
                  <v-text-field
                    label="Confirm password"
                    name="confirm-password"
                    prepend-icon="mdi-lock"
                    v-model="confirmPassword"
                    type="password"
                    :counter="6"
                    required
                    :rules="confirmPasswordRules"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn
                  color="primary"
                  @click="onSubmit"
                  :disabled="!valid || loading"
                  :loading="loading"
                  >Create account</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      valid: false,
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      passwordRules: [
        v => !!v || "Password is required",
        v => v.length >= 6 || "Password mast be equal or more then 6 characters"
      ],
      confirmPasswordRules: [
        v => !!v || "Password is required",
        v => v === this.password || "Password should match"
      ]
    };
  },
  methods: {
    onSubmit() {
      if (this.$refs.form.validate()) {
        const user = {
          email: this.email,
          password: this.password
        };

        this.$store
          .dispatch("user/registerUser", user)
          .then(() => {
            this.$router.push("/");
          })
          .catch(() => {});

        console.log(user);
      }
    }
  },
  computed: {
    ...mapGetters("common", ["loading"])
  }
};
</script>
