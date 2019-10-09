<template>
  <div id="board">
    <ul>
      <li
        v-for="(item, index) in dataList"
        :key="index"
        class="index_"
        @click="handleNav(index)"
      >
        <p>{{ showTitle[index] }}</p>
        <p>{{ item }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "IndexBoard",
  props: {
    dataList: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    showTitle: ['第一个', '第二个']
  }),
  methods: {
    handleNav (index) {
      console.log(index)
    }
  }

}
</script>
<style lang="less" scoped>
  #board {
    height: 800px;
  }
  ul {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      list-style: none;
      width: 400px;
      // height: 160px;
      border: 1px solid #acacac;
      margin: 0 10px;
      transition: all ease-in .33s;
      cursor: pointer;
      p:first-child {
        line-height: 32px;
        padding: 0 5px;
        font-weight: bold;
      }
      p:nth-child(2) {
        // line-height: 64px;
        margin: 30px 0;
        text-align: center;
      }
    }
    li:hover {
      background: #38adff;
      color: #fff;
      border: 1px solid #333333;
    }
  }
</style>
