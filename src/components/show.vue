<template>
  <el-container>
    <el-main class="show-main">
      <el-col :span="12" class="show-main-col">
        <el-main class="show-main-dtl-main">
          <div class="show-brand">弹幕信息</div>
          <el-table :data="danMuData">
            <el-table-column prop="ID" label="用户ID" width="180"></el-table-column>
            <el-table-column prop="content" label="内容"></el-table-column>
          </el-table>
        </el-main>
      </el-col>
      <el-col :span="12">
        <el-main>
          <div class="show-brand">不良信息</div>
          <el-table :data="tableData1" stripe>
            <el-table-column prop="category" label="类别" width="180"></el-table-column>
            <el-table-column prop="ID" label="用户ID" width="180"></el-table-column>
            <el-table-column prop="content" label="内容"></el-table-column>
          </el-table>
        </el-main>
      </el-col>
    </el-main>
  </el-container>
</template>


<script>
  export default {
    data() {
      return {
        danMuData: [{
          ID: '253946542',
          content: '金咕咕送火箭了',
        }],
        tableData1: [{
          category: '广告信息',
          ID: '253946542',
          content: '金咕咕送火箭了'
        }, {
          category: '色情信息',
          ID: '254133659',
          content: '百渡下 罗迷霜。目前还没和泻，要的带走＼'
        }, {
          category: '广告信息',
          ID: '253946542',
          content: '金咕咕送火箭了'
        }, {
          category: '广告信息',
          ID: '253946542',
          content: '金咕咕送火箭了'
        }]
      }
    },
    created() {
      this.$axios.get("https://easy-mock.com/mock/5c2cb9d71d8d3d65c3bf4f7c/example/bluishwhite/danMuData?=123")
        .then(res => {
          this.danMuData = res.data.data.danMuData;
        })
    }
  };
</script>

<style lang="scss" scoped>
  .show-main {
    height: calc(100vh - 120px);
  }

  .show-main-col, .show-main-dtl-main {
    height: 100%;
  }

  .show-brand {
    margin-left: 0.5rem;
    font-size: 1.5rem;
  }

  .el-table {
    margin-top: 10px;
  }

</style>
