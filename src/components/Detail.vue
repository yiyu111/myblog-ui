<template>
  <el-main>
    <el-row type="flex" justify="center">
      <el-col :span="20">
        <el-container style="background: #ffffff;height: auto">
          <el-header>
            <h1>{{ content.title }}</h1>
          </el-header>
          <el-main>
            <div class="content">
              <mavon-editor
                class="md"
                :value="content.content"
                :subfield="false"
                defaultOpen="preview"
                :toolbarsFlag="false"
                :editable="false"
                :scrollStyle="true"
              >
              </mavon-editor>
            </div>
            <el-divider></el-divider>
            <div class="commentInput">
              <el-input
                style="width:900px;margin:0  20px 0 0"
                type="textarea"
                clearable
                v-model="comment"
                disabled=""
                placeholder="评论区暂时不可用"
              ></el-input>
              <el-button type="info" disabled="" @click="creatComment">提交</el-button>
            </div>
            <!-- <div
              class="commentarea"
              v-for="comment in comments"
              :key="comment.id"
            >
              <div style="commentArea">
                {{ comment.userId }}
              </div>
              <p>{{ comment.content }}</p>
              <span>发表于：{{ comment.creatTime }}</span> -->
            <!-- </div> -->
          </el-main>
        </el-container>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
import { findByid } from "../api/blog";
export default {
  name: "Comment",
  data() {
    return {
      blogId: this.$route.params.blogId,
      content: {
        title: "sdssssssssssssssssssss体无完肤f",
        content:
          "## sdsdsds** dsdsd\n\n\n\ndfdfdfdf**df" +
          "dfdfdfdfdfdfdfdfdfdf\tdfdfdfdfdfdfdfdffffffffffffffffffffffffffffffffffffffffffffffffffffdfffffffffffffffffffffffffffffffffffffffffffffdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdf" +
          "dfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdf\ndfdfdfdfdfdfsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsds" +
          "dfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdf\ndfdfdfdfdfdfdfdfdfdsdsdsdsddddddddd" +
          "sdsdsdsdsdsdsdsdsd\nsdsdsdsdssd\nsdsdsd" +
          "sdsdsdsdsds\\ndsdsdsdsd\n\n\n\nsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsddsdsdd",
      },
    };
  },
  mounted() {
    this.findById(this.blogId);
  },
  methods: {
    findById(id) {
      findByid(id).then((res) => {
        if (res.code === 200) {
          this.content = res.data;
        }
      });
    },
  },
};
</script>

<style scoped>
.commentInput {
  width: 95%;
  background: #ffffff;
  margin: 10px 5px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px;
  display: flex;
  flex-direction: row;
}
.commentArea {
  text-align: left;
  width: 95%;
  margin: 5px 5px;
  padding: 5px 10px;
  box-shadow: 0 0 10px;
  border-radius: 5px;
  background: #ffffff;
}
.content {
  background: #ffffff;
  width: 95%;
  padding: 20px 10px;
  text-align: left;
  line-height: 30px;
  text-indent: each-line;
  overflow: visible;
  margin: 0 5px;
  font-size: 19px;
}
</style>
