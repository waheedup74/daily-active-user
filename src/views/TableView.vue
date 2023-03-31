<template>
  <div class="container">
    <v-row>
      <v-col>
        <v-data-table
          :headers="headers"
          :items="users.items"
          :items-per-page="5"
          class="elevation-1"
        ></v-data-table>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
// import axios from "axios";

export default {
  data() {
    return {
      headers: [
        { text: "Date", value: "date" },
        { text: "Country", value: "country" },
        { text: "Count", value: "count" },
      ],
      desserts: [
        {
          date: "2022-01",
          country: "USA",
          count: 1300,
        },
        {
          date: "2022-02",
          country: "USA",
          count: 1200,
        },
        {
          date: "2022-03",
          country: "UK",
          count: 1500,
        },
        {
          date: "2022-04",
          country: "KSA",
          count: 1400,
        },
        {
          date: "2022-05",
          country: "AR",
          count: 1900,
        },
      ],
    };
  },
  computed: {
    ...mapState(["users"]),
    // users() {
    //   this.testArray = this.users;
    // },
  },
  methods: {
    ...mapActions(["fetchUsers"]),
  },
  mounted() {
    this.fetchUsers();
  },
};
</script>
