import { Pie } from "vue-chartjs"

export default {
  extends: Pie,

  props: {
    data: Object,
    obtions: Object,
  },

  mounted() {
    this.renderChart(this.data, {
      responsive: true,
      maintainAspectRatio: false,
    })
  },
}
