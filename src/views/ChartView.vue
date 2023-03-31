<template>
  <v-row>
    <v-col>
      <div class="container">
        <Bar id="my-chart-id" :options="options" :data="chartData" />
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { Bar } from "vue-chartjs";
import { mapState, mapActions } from "vuex";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  components: { Bar },
  data() {
    return {
      options: {
        responsive: true,
      },
    };
  },
  computed: {
    ...mapState(["users"]),
    getCount() {
      const counts = this.users.items.map((data) => data.count);
      return counts;
    },
    getDates() {
      const dates = this.users.items.map(
        (data) => data.country + "-" + data.date
      );
      return dates;
    },
    chartData() {
      return {
        datasets: [
          {
            label: "Active users with countries",
            data: this.getCount,
          },
        ],
        labels: this.getDates,
      };
    },
  },
  methods: {
    ...mapActions(["fetchUsers"]),
  },
  mounted() {
    this.fetchUsers();
    console.log(this.$store.getters.users);
  },
};
</script>
