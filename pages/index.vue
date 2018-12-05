<template>
  <div class="container">
    <IndexBoard />
  </div>
</template>

<script>
import IndexBoard from '~/components/index/board.vue'

export default {
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
