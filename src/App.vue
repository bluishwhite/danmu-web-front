<template>
  <div id="app">
    <el-container>
      <el-header>
        <img src="./assets/logo.png" width="20px">
        <span>不良弹幕信息识别</span>
        <el-menu mode="horizontal" background-color="#545c64" text-color="#fff" @select="handleSelect">
           
          <div class="el-menu-item" index="1"><router-link to="/reptile">爬取数据</router-link></div>
          <div class="el-menu-item" index="2"><router-link to="/show">结果展示</router-link></div>
        </el-menu>
      </el-header>
      <el-main>
        <el-col :span="16">
          <router-view></router-view>
        </el-col>
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
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
  .el-col {
    border-radius: 4px;
    margin-left: 50px;
  }
  .el-menu{
    margin-left: 250px;
    margin-top: -63px;
  }
  span{
    font-size: 25px ;
  }
</style>
