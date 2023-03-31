<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">DAU</div>

    <v-spacer></v-spacer>
    <div class="d-flex align-item-center">
      <v-list class="transparent">
        <router-link class="mr-5 white--text" to="/">Table</router-link>
      </v-list>
      <v-list class="transparent">
        <router-link to="/chart" class="white--text">Chart</router-link>
      </v-list>
    </div>
  </v-app-bar>
</template>
