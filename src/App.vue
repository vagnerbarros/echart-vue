<template>
  <div>
    <bar-chart style="margin-bottom: 50px; float: left"></bar-chart>
    <pie-chart style="margin-bottom: 50px; float: left">2123</pie-chart>
  </div>
</template>

<script>
  import BarChart from './BarChart.vue';
  import PieChart from './PieChart.vue';
  export default {
    components: {
      BarChart,
      PieChart
    },
  }
</script>

<style lang="scss" scoped>

</style>