<template>
  <div>
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
  </div>
</template>

<script>
export default {
    data(){
        return{
            blogs:[],
        }
    },
    mounted:{
        list()
    },
    methods:{
        list(){
            this.blogs=''
        }
    }
}
</script>

<style>

</style>