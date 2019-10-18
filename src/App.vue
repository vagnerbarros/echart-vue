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
      tooltip: {},
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
        tooltip: {
          formatter: (params) => {
            return params.value.toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 2, useGrouping: false});
          }
        }
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
            formatter: (params) => {
              return params.value.toLocaleString('pt-BR', { style: 'decimal', minimumFractionDigits: 2, useGrouping: false});
            },
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
