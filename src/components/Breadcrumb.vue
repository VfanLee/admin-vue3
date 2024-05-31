<script setup>
const route = useRoute()

const breadcrumbRoutes = ref([])
const filterBreadcrumb = () => {
  breadcrumbRoutes.value = route.matched.filter(route => route.meta && route.meta.title)
}

watch(
  route,
  () => {
    filterBreadcrumb()
  },
  { immediate: true }
)
</script>

<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <template v-for="(route, index) of breadcrumbRoutes" :key="route.path">
        <el-breadcrumb-item v-if="!route.meta.hideBreadcrumb">
          <span v-if="index === breadcrumbRoutes.length - 1">{{ route.meta.title }}</span>
          <RouterLink :to="route.path" v-else>{{ route.meta.title }}</RouterLink>
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<style lang="scss">
.breadcrumb {
  display: flex;
  gap: 10px;
  margin-block-end: 8px;
  i[class*='-icon'] {
    font-size: 12px;
  }
}
</style>
