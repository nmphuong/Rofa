<script>
import { Line } from 'vue-chartjs'
export default {
  extends: Line,
  data () {
    return {
      gradient: null,
      items: [],
      json: {},
      arrayKeys: [],
      arrayValues: []
    }
  },
  async mounted () {
    await this.totalListing()
    this.json = JSON.parse(this.items.dataListingChart)
    this.arrayKeys = Object.keys(this.json)
    this.arrayValues = Object.values(this.json)
    this.gradient = this.$refs.canvas
      .getContext('2d')
      .createLinearGradient(0, 0, 0, 450)
    this.gradient.addColorStop(0, 'rgba(255, 199, 0, 1)')

    this.renderChart(
      {
        labels: this.arrayKeys,
        datasets: [
          {
            label: 'No. Total Listings',
            // borderColor: '#FC2525',
            pointBackgroundColor: 'rgba(253, 253, 253, 0)',
            borderWidth: 1,
            pointBorderColor: 'rgba(253, 253, 253, 0)',
            backgroundColor: this.gradient,
            data: this.arrayValues
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{
            gridLines: {
              display: false
            }
          }],
          yAxes: [{
            gridLines: {
              display: false
            }
          }]
        }
      }
    )
  },
  methods: {
    //
  }
}
</script>