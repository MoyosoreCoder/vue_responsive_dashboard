<template>
  <div class="chart-container">
    <canvas id="bar-chart"></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

Chart.register(BarController, BarElement, CategoryScale, LinearScale);

export default defineComponent({
  name: "ChartComponent",
  setup() {
    onMounted(() => {
      const ctx = document.getElementById("bar-chart") as HTMLCanvasElement;

      new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["January", "February", "March", "April", "May"],
          datasets: [
            {
              label: "Sales",
              data: [12, 19, 3, 5, 2],
              backgroundColor: "rgba(75, 192, 192, 0.6)",
            },
          ],
        },
        options: {
          scales: {
            x: {
              grid: {
                display: false, // Hide the grid lines for the x-axis
              },
            },
            y: {
              grid: {
                display: false, // Hide the grid lines for the y-axis
              },
              ticks: {
                beginAtZero: true, // Start the y-axis at 0
              },
            },
          },
          responsive: true, // Make the chart responsive
          maintainAspectRatio: false, // Allow the chart size to change dynamically
        },
      });
    });

    return {};
  },
});
</script>

<style scoped>
.chart-container {
  position: relative;
  width: 60%; /* Adjust the width of the chart */
  height: 400px; /* Adjust the height of the chart */
  margin: 0 auto; /* Center the chart */
}
</style>
