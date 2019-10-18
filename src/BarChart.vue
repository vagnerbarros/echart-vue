<template>
  <div id="app">
    <div id="container" ref="container" style="min-height: 400px; width: 700px"></div>
  </div>
</template>



<script>

import ECharts from "echarts";

const dados = [
  { mes: '01/2019', valor: 1000.23},
  { mes: '02/2019', valor: 1100.00},
  { mes: '03/2019', valor: 900.123},
  { mes: '04/2019', valor: 1300.45456},
  { mes: '05/2019', valor: 800.8678},
  { mes: '06/2019', valor: 1500.67878},
]

let cores = ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'];

// const ECharts = window.echarts || undefined;

/* eslint-disable no-alert, no-console */
export default {
  name: 'app',

  data: () => ({
    
    options: {
      color: ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
      // tooltip: {},
      grid: {
        left: '5%',
        right: '5%',
        bottom: '0%',
        top: '5%',
        containLabel: true,
        tooltip: {
          formatter: (params) => parseFloat(params.value.toFixed(2)).toLocaleString('pt-BR', {style: 'decimal', minimumFractionDigits: 2}),
        }
      },

      xAxis: {
        type: 'category',
        // data: ['01/19', '02/19', '03/19', '04/19', '05/19', '06/19'],
        data: dados.map(mes => mes.mes),
      },

      yAxis: {},

      series: [{
        type: 'bar',
        animation: true,
        label: {
          normal: {
            show: true,
            rotate: 90,
            formatter: (params) => parseFloat(params.value.toFixed(2)).toLocaleString('pt-BR', {style: 'decimal', minimumFractionDigits: 2}),
            fontSize: 12,
            position: 'top',
            distance: 30

          }
        },
        data: dados.map((mes, i) => { 
          return {
            value: mes.valor, 
            itemStyle: {color: cores[i] }
          } 
        }),
      }]
    }

  }),


  mounted () {
    this.init();
  },

  methods: {
    init() {
      var dom = this.$refs.container;
      var myChart = ECharts.init(dom);

      myChart.setOption(this.options, true);

      window.onresize = function() {
        myChart.resize();
      };
    }
  },
}
</script>

<style>
</style>
