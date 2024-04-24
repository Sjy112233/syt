<template>
  <div class="search">
    <el-autocomplete 
    clearable 
    placeholder="请输入医院名称" 
    class="form"
     />
    <el-button 
    type="primary" 
    size="default" 
    @click=""
    :icon="Search"
    >
  </el-button>
  </div>
</template>

<script setup lang="ts">
//引入图标
import {
  Search
} from '@element-plus/icons-vue'
</script>
<!-- 深度选择器： >>> /deep/ ::v-deep -->
<style scoped lang="scss">
.search {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;

  ::v-deep .el-input__wrapper {
    width: 600px;
  }
}
</style>