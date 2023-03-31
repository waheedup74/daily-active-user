<template>
  <v-app>
    <v-main>
      <TopNavbar />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import TopNavbar from "./components/layouts/TopNavbar.vue";

export default {
  name: "App",

  components: {
    TopNavbar,
  },

  data: () => ({
    //
  }),
};
</script>
