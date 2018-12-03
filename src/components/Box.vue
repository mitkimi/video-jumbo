<template>
  <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6" style="margin-bottom:16px;">
    <el-card style="width:100%">
      <div slot="header" class="clearfix box">
        [{{id}}] {{ color_name }}
      </div>
      <div>
        <div class='ball' ref="ball"></div>
      </div>
      <el-row class="footer">
        <el-col :span="12">{{ colors[0] }}</el-col>
        <el-col :span="12">{{ colors[1] }}</el-col>
      </el-row>
    </el-card>
  </el-col>
</template>

<script>
export default {
  name: 'Box',
  props: ['data'],
  mounted() {
    this.init();
  },
  data() {
    return {
      id: this.data.id,
      color_name: this.data.name,
      colors: [this.data.colors[0], this.data.colors[1]],
    };
  },
  methods: {
    init() {
      // console.log(colors);
      // eslint-disable-next-line
      this.$refs.ball.style.background = 'linear-gradient(' + this.colors[0] + ',' + this.colors[1] + ')';
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  color: rgba(0,0,0,.5);
}
.ball {
  width: 160px;
  height: 160px;
  border-radius:80px;
  overflow: hidden;
  box-shadow: 2px 2px 6px rgba(0,0,0,.2);
  margin:30px auto;
}
.footer {
  text-align:center;
  color:rgba(0,0,0,.5);
}
</style>
