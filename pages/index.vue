<template>
  <div class="container">
    <IndexBoard
      :data-list="list" />
  </div>
</template>

<script>
import IndexBoard from '~/components/index/board.vue'

export default {
  async asyncData ({app, query}) {
    let list = ['fwdwqdwe2454f5we5f465465q4w65qw', '15465ewq165e4qw65e1qweqwe56qw4e5qw56e4q']
    return { list }
  },
  components: {
    IndexBoard
  },
  data () {}
}
</script>

<style>
.container {
  min-height: 100vh;
}
</style>
