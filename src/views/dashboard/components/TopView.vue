<script setup lang="ts">
import { init, use } from 'echarts/core'
import { LineChart, BarChart } from 'echarts/charts'
import { GridComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

use([LineChart, BarChart, GridComponent, CanvasRenderer])

const initVisitChart = () => {
  const el = document.querySelector('#visit-chart') as HTMLElement
  const chart = init(el)
  chart.setOption({
    xAxis: {
      type: 'category',
      show: false,
      boundaryGap: false,
    },
    yAxis: {
      show: false,
    },
    series: [
      {
        type: 'line',
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        areaStyle: {
          color: 'purple',
        },
        lineStyle: {
          width: 0,
        },
        itemStyle: {
          opacity: 0,
        },
        smooth: true,
      },
    ],
    grid: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  })
}

const initPayChart = () => {
  const el = document.querySelector('#pay-chart') as HTMLElement
  const chart = init(el)
  chart.setOption({
    color: ['#4787F7'],
    xAxis: {
      type: 'category',
      show: false,
      data: ['00:00', '00:00', '00:00', '00:00', '00:00', '00:00', '00:00'],
    },
    yAxis: {
      type: 'value',
      show: false,
    },
    series: [
      {
        type: 'bar',
        data: [120, 200, 150, 80, 70, 110, 130],
        barWidth: '60%',
      },
    ],
    grid: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  })
}

const initActivityChart = () => {
  const el = document.querySelector('#activity-chart') as HTMLElement
  const chart = init(el)
  chart.setOption({
    xAxis: {
      type: 'value',
      show: false,
    },
    yAxis: {
      type: 'category',
      show: false,
    },
    series: [
      {
        type: 'bar',
        stack: '总量',
        data: [78],
        barWidth: 10,
        itemStyle: {
          color: '#7CB997',
        },
      },
      {
        type: 'bar',
        stack: '总量',
        data: [22],
        barWidth: 10,
        itemStyle: {
          color: '#F0F0F0',
        },
      },
    ],
    grid: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  })
}

onMounted(() => {
  initVisitChart()
  initPayChart()
  initActivityChart()
})
</script>

<template>
  <div class="top-view">
    <el-row :gutter="12">
      <el-col :span="6">
        <CompCard title="累计销售额" value="¥ 126,560">
          <div>
            <span>周同比</span>
            <span>
              12%
              <SvgIcon name="caret-up" color="var(--el-color-danger)"></SvgIcon>
            </span>
          </div>
          <div>
            <span>日同比</span>
            <span>
              11%
              <SvgIcon name="caret-down" color="var(--el-color-success)"></SvgIcon>
            </span>
          </div>

          <template #footer>
            <span>日销售额</span>
            <span>￥ 12,423</span>
          </template>
        </CompCard>
      </el-col>

      <el-col :span="6">
        <CompCard title="访问量" value="8,846">
          <div id="visit-chart" style="width: 100%; height: 100%"></div>
          <template #footer>
            <span>日访问量</span>
            <span>1,234</span>
          </template>
        </CompCard>
      </el-col>

      <el-col :span="6">
        <CompCard title="支付笔数" value="6,560">
          <div id="pay-chart" style="width: 100%; height: 100%"></div>
          <template #footer>
            <span>转化率</span>
            <span>60%</span>
          </template>
        </CompCard>
      </el-col>

      <el-col :span="6">
        <CompCard title="运营活动效果" value="78%">
          <div id="activity-chart" style="width: 100%; height: 100%"></div>
          <template #footer>
            <div>
              <span>周同比</span>
              <span>
                12%
                <SvgIcon name="caret-up" color="var(--el-color-danger)"></SvgIcon>
              </span>
            </div>
            <div>
              <span>日同比</span>
              <span>
                11%
                <SvgIcon name="caret-down" color="var(--el-color-success)"></SvgIcon>
              </span>
            </div>
          </template>
        </CompCard>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.money {
  margin-inline-start: 6px;
  font-weight: bold;
}
</style>
