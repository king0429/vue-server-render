<template>
  <div class="test">
    <h2>测试组件</h2>
    <p>{{ msg }}</p>
    <button
      class="button--grey"
      @click="handleClick">{{ childData.a }}</button>
  </div>
</template>
<script>
export default {
  name: 'Test1',
  props: {
    childData: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      msg: 'hello server-render'
    }
  },
  methods: {
    handleClick () {
      console.log(this)
      // alert('hahahha')
    }
  }
}
</script>
