<template>
  <div class="baseback">
    <el-container>
      <el-header>
        <Head></Head>
      </el-header>
      <el-main>
        <transition name="slide-right" mode="out-in">
          <router-view></router-view>
        </transition>
      </el-main>
      <Foot></Foot>
    </el-container>
  </div>
</template>

<script>
import Head from "../components/Head";
import Foot from "../components/Foot";
export default {
  name: "Home",
  components: { Foot, Head },
  data() {
    return {
      
    };
  },
};
</script>

<style scoped>
.baseback {
  width: 100%;
  background: rgba(218, 212, 212, 0.438);
  z-index: -1;
  height: auto;
}

#fade {
  transition: ease-in-out 4s;
}
</style>
