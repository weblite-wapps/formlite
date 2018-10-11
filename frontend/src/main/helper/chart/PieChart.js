import { Pie } from 'vue-chartjs'

const backgroundColor = [
  '#f80112',
  '#f83299',
  '#f88819',
  '#f08819',
  '#f11972',
  '#f80112',
  '#f83299',
  '#f88819',
  '#f08819',
  '#f11972',
]

export default {
  extends: Pie,

  props: {
    data: Object,
  },

  computed: {
    dataWithColor() {
      return {
        labels: this.data.labels,
        datasets: [{ backgroundColor, data: this.data.numbers }],
      }
    },
  },

  mounted() {
    this.renderChart(this.dataWithColor, {
      responsive: true,
      maintainAspectRatio: false,
    })
  },
}
