<script setup lang="ts">
defineOptions({
  name: 'VatFooter',
})
</script>

<template>
  <footer class="vat-footer">
    <div class="vat-footer__title">
      <el-link href="http://github.com/vfanlee/vue-admin-template" target="__blank">Vue Admin Template</el-link>
      <el-link href="http://github.com/vfanlee/vue-admin-template" target="__blank">
        <el-icon>
          <SvgIcon name="github-fill"></SvgIcon>
        </el-icon>
      </el-link>
      <el-link href="https://vfanlee.pages.dev" target="__blank">Vfan Lee </el-link>
    </div>
    <div class="vat-footer__copyright">© Powered by Vfan Lee</div>
  </footer>
</template>
