<script setup>
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'

onMounted(() => {
  // 动态加载 main.js，确保在组件渲染完成后执行
  const script = document.createElement('script')
  script.src = '/assets/js/main.js'
  script.async = true
  document.body.appendChild(script)
})
</script>

<template>
  <RouterView />
</template>