<template>
  <div id="app">
    <el-container>
      <el-header class="nav-header">
        <div class="nav-header-brand">
          <i class="el-icon-view"></i>
          <span>不良弹幕信息识别</span>
        </div>
        <el-menu class="nav-header-menu" mode="horizontal" background-color="#B3C0D1" text-color="#000000"
                 :router="true"
                 @select="handleSelect">
          <el-menu-item class="el-menu-item" index="/reptile">爬取数据</el-menu-item>
          <el-menu-item class="el-menu-item" index="/show">结果展示</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'App',
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  .nav-header {
    height: 61px !important;
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
    border-bottom: solid 1px #e6e6e6;
  }

  .nav-header-brand {
    float: left;
    margin: 0 20px;
  }

  .nav-header-menu {
    float: left;
  }
</style>
