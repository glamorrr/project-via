<script setup>
import { getLineChartConfig } from '@core/libs/chartjs/chartjsConfig';
import LineChart from '@core/libs/chartjs/components/LineChart';
import { useTheme } from 'vuetify';

const props = defineProps({
  colors: {
    type: null,
    required: true,
  },
})

const vuetifyTheme = useTheme()

const data = {
  labels: [
    "12/03",
    "13/03",
    "14/03",
    "15/03",
    "16/03",
    "17/03",
  ],
  datasets: [
    {
      fill: false,
      tension: 0.5,
      pointRadius: 1,
      label: 'Man',
      pointHoverRadius: 5,
      pointStyle: 'circle',
      borderColor: props.colors.primary,
      backgroundColor: props.colors.primary,
      pointHoverBorderWidth: 5,
      pointHoverBorderColor: props.colors.white,
      pointBorderColor: 'transparent',
      pointHoverBackgroundColor: props.colors.primary,
      data: [
        80,
        150,
        180,
        270,
        210,
        160,
      ],
    },
    {
      fill: false,
      tension: 0.5,
      label: 'Women',
      pointRadius: 1,
      pointHoverRadius: 5,
      pointStyle: 'circle',
      borderColor: props.colors.error,
      backgroundColor: props.colors.error,
      pointHoverBorderWidth: 5,
      pointHoverBorderColor: props.colors.white,
      pointBorderColor: 'transparent',
      pointHoverBackgroundColor: props.colors.error,
      data: [
        80,
        125,
        105,
        130,
        215,
        195,
      ],
    },
  ],
}

const chartConfig = computed(() => getLineChartConfig(vuetifyTheme.current.value))
</script>

<template>
  <LineChart
    :chart-options="chartConfig"
    :height="400"
    :chart-data="data"
  />
</template>
