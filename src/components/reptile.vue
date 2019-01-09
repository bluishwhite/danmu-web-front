<template>
  <div id="reptile">
    <el-form :model="form" class="demo-form-inline" label-width="100px" label-position="right">
      <el-form-item
        label="房间号"
        prop="roomId"
        :rules="[
            { required: true, message: '房间号不能为空'}
          ]">
        <el-input type="roomId" v-model="form.roomId" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="弹幕来源">
        <el-select v-model="form.source" placeholder="弹幕来源">
          <el-option label="虎牙" value="huya"></el-option>
          <el-option label="斗鱼" value="douyu"></el-option>
        </el-select>
      </el-form-item>
      <br>

      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">提交</el-button>
        <el-button type="success" @click="analyseData()">数据分析</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  let url = ""
  export default {
    data() {
      return {
        form: {
          source: '',
          roomId: ''
        },
        value: ''
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
            let url = string('www.' + form.source + '.com');
            data = JSON.stringify({
              source: form.source,
              roomId: form.roomId
            });
            axios.post(data)

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      analyseData() {

      }
    }
  }
</script>
<style lang="scss" scoped>
  .demo-form-inline {
    width: 350px;
  }
</style>


