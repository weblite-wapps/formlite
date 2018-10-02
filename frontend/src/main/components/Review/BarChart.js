import { Bar } from "vue-chartjs"

export default {
  extends: Bar,

  props: {
    data: Object,
    obtions: Object,
  },

  data() {
    return {
      datacollection: {
        labels: ["January", "February", ""],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f80112",
            dataq: [40, 30, 0],
          },
        ],
      },
    }
  },
  mounted() {
    this.renderChart(this.data, {
      responsive: true,
      maintainAspectRatio: false,
    })
  },
}
