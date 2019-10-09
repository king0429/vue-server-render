<template>
  <div class="header">
    <ul>
      <li
        v-for="(item, index) in func"
        :key="index"
        @click="handleNav(item)">
        <span :class="index === sel ? 'sel' : ''">{{ item.title }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Header',
  props: {},
  data () {
    return {
      func: [],
      sel: ''
    }
  },
  mounted () {
    const that = this
    const func = this.$store.state.func
    let sel = ''
    func.forEach((val, index) => {
      if (that.$route.path === val.url) sel = index
    })
    this.func = func
    this.sel = sel
  },
  methods: {
    handleNav (e) {
      console.log(e)
      if (e.url) {
        this.$router.push({
          path: e.url
        })
      }
    }
  },
}
</script>
<style lang="less" scoped>
.header {
  width: 100%;
  height: 64px;
  background: #222;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  ul {
    padding: 0 50px;
    display: flex;
    height: 100%;
    li {
      width: 120px;
      line-height: 64px;
      list-style: none;
      text-align: center;
      span {
        padding: 3px 5px;
        cursor: pointer;
        transition: all ease-in .35s;
        border-bottom: 1px solid #222;
      }
      span:hover {
        border-bottom: 1px solid #fff;
      }
      span.sel {
        border-bottom: 1px solid #09B3AF;
        color: #09B3AF;
      }
    }
  }
}
</style>
