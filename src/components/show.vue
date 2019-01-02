<template>
  <div id="show">
    <el-main>
      <span> 爬取的弹幕信息 </span>
      <el-table
      :data="danMuData"
      height="250"
      border
      style="width: 100%"
      >
      <el-table-column
        prop="ID"
        label="用户ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="content"
        label="内容">
      </el-table-column>
      </el-table>
      <span> 识别出的不良信息 </span>
      <el-table
      :data="tableData1"
      stripe
      style="width: 100%">
        <el-table-column
          prop="category"
          label="类别"
          width="180">
        </el-table-column>
        <el-table-column
          prop="ID"
          label="用户ID"
          width="180">
        </el-table-column>
        <el-table-column
          prop="content"
          label="内容">
        </el-table-column>
      </el-table>
    </el-main>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        danMuData:[{
          ID:'253946542',
          content:'金咕咕送火箭了',
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
    created(){
      this.$axios.get("https://easy-mock.com/mock/5c2cb9d71d8d3d65c3bf4f7c/example/bluishwhite/danMuData?=123")
      .then(data => {
        this.danMuData = data.data;    
      })
    }
  };
</script>

<style lang="scss" scoped>
span{
  font-size: 35px;
}
.el-table{
  margin: 25px 0;
}

</style>