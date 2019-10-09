<template>
  <div class="container">
    <Header />
    <div class="board">
      <h3 class="board_title">Hello, SSR</h3>
      <p class="board_info">
        SSR(server-side-render) is used by a front-end to set a website.It's good to SEO, and make an all-stuck project.
      </p>
    </div>
    <div class="pic">
      <img
        src="~/assets/frontend.png"
        alt="web">
      <img
        src="~/assets/right.png"
        alt="throw">
      <img
        src="~/assets/database.png"
        alt="databse">
    </div>
  </div>
</template>

<script>
import IndexBoard from '~/components/index/board.vue'
import Header from '~/components/public/header.vue'
export default {
  async asyncData ({app, query}) {
    let list = ['页面1', '页面2']
    return { list }
  },
  head: () => ({title: '首页'}),
  components: {
    IndexBoard, Header
  },
  data () {},
  mounted() {
    console.log(this)
  },
}
</script>

<style lang="less">
.container {
  min-height: 100vh;
  padding-top: 64px;
  .board {
    margin: 120px 400px;
    padding: 50px 96px;
    border: 1px solid #eee;
    border-top-left-radius: 24px;
    border-bottom-right-radius: 24px;
    box-shadow: 6px 6px 20px 2px #dadada;
    .board_title {
      color: #222;
      font-size: 28px;
    }
    .board_info {
      color: #999;
      margin-top: 36px;
      font-size: 14px;
    }
  }
  .pic {
    padding: 20px 0;
    text-align: center;
    img {
      vertical-align: middle;
      width: 100px;
    }
    img:nth-child(2) {
      width: 96px;
      margin: 0 135px;
      // height: 96px;
    }
  }
}
</style>
