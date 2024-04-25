<script setup>
import { reqGetArticleList } from '@/api/article'

const dataFilter = ref({})
const dataList = ref([])

init()

function init() {
  getArticleList()
}

async function getArticleList() {
  const res = await reqGetArticleList(unref(dataFilter))
  console.log(res)
}
</script>

<template>
  <el-card>
    <div class="filter-container">
      <el-input class="filter-item"></el-input>
      <el-select class="filter-item"></el-select>

      <div style="flex: 1 1 0"></div>

      <el-button @click="$router.push('/article/detail/1')">文章详情</el-button>
      <el-button @click="$router.push('/article/edit')">新增文章</el-button>
    </div>
  </el-card>

  <el-card class="list-container">
    <el-table></el-table>
  </el-card>

  <el-card class="pagination-container">
    <el-pagination></el-pagination>
  </el-card>
</template>

<style lang="scss" scoped></style>
