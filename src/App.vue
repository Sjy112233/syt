<template>
  <div class="container">
    <!-- 顶部 -->
    <HospitalTop/>
    <!-- 展示路由组件 -->
    <div class="content">
      <router-view></router-view>
    </div>
    <!-- 底部 -->
    <HospitalBottom/>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss"> 
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .content {
    width: 1200px;
    min-height: 700px;
    // background-color: red;
    margin-top: 70px;
  }
}
</style>