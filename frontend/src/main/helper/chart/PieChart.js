import { Pie } from "vue-chartjs"

export default {
  extends: Pie,

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
            data: [40, 30, 0],
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
