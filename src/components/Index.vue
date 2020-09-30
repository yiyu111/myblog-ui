<template>
  <el-container>
    <el-main>
      <el-row type="flex" :gutter="10" justify="center">
        <el-col :span="18">
          <div style="width:98%;margin:0 15px;">
            <el-carousel height="400px" autoplay loop trigger="hover">
              <el-carousel-item>
                <el-image
                  fit="cover"
                  style="width:100%;height:100%"
                  src="/static/31.jpg"
                ></el-image>
              </el-carousel-item>
              <el-carousel-item>
                <el-image style="width:100%;" src="/static/34.jpg"></el-image>
              </el-carousel-item>
              <el-carousel-item>
                <el-image style="width:100%" src="/static/33.jpg"></el-image>
              </el-carousel-item>
              <el-carousel-item>
                <el-image style="width:100%" src="/static/39.jpg"></el-image>
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="blogArea" v-for="blog in blogs" :key="blog.id">
            <router-link :to="'/detail/' + blog.id">
              <h2>{{ blog.title }}</h2>
            </router-link>
            <div style="text-align: justify;">
              {{ blog.description }}
            </div>
            <time>{{ blog.creatTime | formatDate }}</time>
            <span class="el-icon-chat-line-square">100</span>
            <span v-for="tag in blog.tags" :key="tag.id">
              <el-tag type="info">{{tag.name}}</el-tag>
            </span>
          </div>
          <div class="block">
            <div class="pager">
              <el-pagination
                background
                layout="total, prev, pager, next"
                :total="total"
                :current-page="currentPage"
                :page-size="size"
                @current-change="handleCurrentChange"
              ></el-pagination>
            </div>
          </div>
        </el-col>
        <el-col :span="5" style="background: white;">
          <el-container>
            <el-main>
              <el-image src="/static/45.jpg"></el-image>
              <el-divider></el-divider>
              
              <el-button
                type="info"
                icon="el-icon-link"
                style="width: 200px; margin: 5px 0"
              >
                <a href="https://github.com/yiyu111/myblog" type="" target="blank">源码在github仓库分享</a>
              </el-button>
              <el-button
                type="info"
                icon="el-icon-message"
                style="width: 200px; margin: 5px 0"
                >
                <a href="https://mail.qq.com/" target="blank">815459162@qq.com</a></el-button
              >
              <el-divider></el-divider>
              <el-card header="分类" >
                <el-tag v-for="tag in tags" :key="tag.id" type="info">{{tag.name}}</el-tag>
              </el-card>
            </el-main>
          </el-container>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import { list } from "../api/blog"
export default {
  name: "Index",
  data() {
    return {
      blogs: [
        {
          title: "sdfsdfsdf",
          id: 2,
          content: "粉fffffdfd\r\nas\n\ndsdfdfasdfasdfasdfasdfasdfsdfas\n\n\n",
          description:
            "sdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
          creatTime: new Date("20140214"),
        },
        { title: "sdfsdfsdf", id: 5, content: "asdfsdfas\n" },
        { id: 3, content: "asdsssassssssssssfsdfas\n" },
        { id: 12, blog: "asdfsdfas" },
        { blog: "asdfsdfdgdfgfas" },
      ],
      tags:[],
      currentPage: 1,
      total: 0,
      size: 5,
    };
  },
  mounted() {
    this.handleCurrentChange(1);
  },
  methods: {
    handleCurrentChange(c) {
      this.currentPage = c;
      const _this = this;
      list(this.currentPage, this.size).then((res) => {
        if (res.code === 200) {
          _this.blogs = res.data.records;
          _this.total = res.data.total;
        }
      });
    },
  },
};
</script>

<style scoped>
.blogArea {
  text-align: left;
  width: 95%;
  height: auto;
  position: relative;
  margin: 10px 5px 15px 15px;
  padding: 5px 15px;
  border: black 21px;
  border-radius: 5px;
  box-shadow: 0 0 5px 0;
  background: #fff;
  word-wrap: break-word;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 19px;
}
.pager {
  width: 99%;
  margin: 10px auto;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
