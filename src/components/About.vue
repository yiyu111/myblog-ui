<template>
  <el-main>
    <el-row type="flex" justify="center">
      <el-col :span="20">
        <el-timeline >
          <el-timeline-item  timestamp="2018/4/12" placement="top">
            <el-card style="width: 500px">
              <h4>更新 Github 模板</h4>
              <p>王小虎 提交于 2018/4/12 20:46</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2018/4/3" placement="top">
            <el-card>
              <h4>更新 Github 模板</h4>
              <p>王小虎 提交于 2018/4/3 20:46</p>
            </el-card>
          </el-timeline-item>
          <el-timeline-item timestamp="2018/4/2" placement="top">
            <el-card>
              <h4>更新 Github 模板</h4>
              <p>王小虎 提交于 2018/4/2 20:46</p>
            </el-card>
          </el-timeline-item>
        </el-timeline>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
  export default {
    name: 'About',
  }
</script>

<style scoped>

</style>
