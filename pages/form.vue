<template>
  <div class="container">
    <Header />
    <div class="form">
      <div class="form_line">
        <input
          ref="input1"
          v-model="formData['1']"
          type="text"
          @focus="handleFocus(1)"
          @blur="handleBlur(1)">
        <p
          :class="focus[1] ? 'focus' : ''"
          @click="handleFocus(1)">输入预约姓名</p>
      </div>
      <div class="form_line">
        <input
          ref="input0"
          v-model="formData['0']"
          type="text"
          @focus="handleFocus(0)"
          @blur="handleBlur(0)">
        <p
          :class="focus[0] ? 'focus' : ''"
          @click="handleFocus(0)"
        >输入手机号</p>
      </div>
      <div class="form_line">
        <input
          ref="input2"
          v-model="formData['2']"
          type="text"
          @focus="handleFocus(2)"
          @blur="handleBlur(2)">
        <p
          :class="focus[2] ? 'focus' : ''"
          @blur="handleBlur(2)">输入邮箱</p>
      </div>
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
  data () {
    return {
      focus: [0, 0, 0],
      formData: {}
    }
  },
  mounted() {
    console.log(this)
  },
  methods: {
    handleFocus (index) {
      const that = this
      const formData = that.formData
      let arr = [0, 0, 0]
      this.$refs['input' + index].focus()
      console.log(formData)
      console.log(index)
      setTimeout(() => {
        that.focus = arr.map((val, ind) => {
          if (formData[ind.toString()]) {
            return true
          } else if (ind === index) {
            return true
          } else {
            return false
          }
        })
      }, 100)
    },
    handleBlur (index) {
      const formData = this.formData
      let arr = this.focus
      this.focus = arr.map((val, ind) => {
        if (formData[ind.toString()]) {
          return true
        } else {
          return false
        }
      })
      
    }
  }
}
</script>

<style lang="less">
.container {
  min-height: 100vh;
  padding-top: 64px;
  .form {
    margin: 120px 400px;
    padding: 50px 96px;
    border: 1px solid #eee;
    .form_line {
      position: relative;
      padding: 50px 0;
      input {
        width: 100%;
        border:none;
        border-bottom: 1px solid #dadada;
        height: 32px;
        line-height: 32px;
        outline: none;
      }
      p {
        line-height: 32px;
        color: #8d8d8d;
        position: absolute;
        top: 50px;
        left: 10px;
        font-size: 14px;
        transition: all ease-in .3s;
      }
      p.focus {
        top: 9px;
        left: 0px;
        font-size: 12px;
      }
    }
  }
}
</style>
