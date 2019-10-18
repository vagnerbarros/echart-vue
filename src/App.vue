<template>
  <div id="app">
    <chart style="100%" :options="options"></chart>
  </div>
</template>

<script>

export default {
  name: 'app',
  data: () => ({
    
    options: {
      color: ['#003366', '#006699', '#4cabce', '#e5323e'],
      tooltip: {},
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: ['01/19', '02/19', '03/19', '04/19', '05/19', '06/19'],
      },
      yAxis: {},
      series: [{
        type: 'bar',
        animation: true,
        label: {
          normal: {
            show: true,
            rotate: 90,
            formatter: '{c}',
            fontSize: 12,
            rich: {
                name: {
                    textBorderColor: '#fff'
                }
            }
          }
        },
        data: [
          {
            value: 1000,
            itemStyle: {color: 'blue'}
          }, 
          {
            value: 1100,
            itemStyle: {color: 'green'}
          }, 
          {
            value: 900,
            itemStyle: {color: 'red'}
          },
          {
            value: 1300,
            itemStyle: {color: 'orange'}
          }, 
          {
            value: 800,
            itemStyle: {color: 'purple'}
          },
          {
            value: 1500,
            itemStyle: {color: 'black'}
          }],
      }]
    }
  })
}
</script>

<style>

</style>
