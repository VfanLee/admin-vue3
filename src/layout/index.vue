<script setup lang="ts">
import './index.scss'
import VatSidebar from './VatSidebar/index.vue'
import VatHeader from './VatHeader/index.vue'
import VatContent from './VatContent/index.vue'
import VatFooter from './VatFooter/index.vue'

import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
</script>

<template>
  <div class="vat-layout-bg"></div>
  <div class="vat-layout" :class="[{ 'is-sidebar--collapse': appStore.collapse }]">
    <VatSidebar />
    <div class="vat-container">
      <VatHeader />
      <VatContent />
      <VatFooter />
    </div>
  </div>
</template>
