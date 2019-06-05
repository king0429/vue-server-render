<template>
  <div id="board">
    <ul>
      <li
        v-for="(item, index) in dataList"
        :key="index"
        class="index_"
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
      default: () => ([])
    }
  },
  data: () => ({
    showTitle: ['第一次', '第二次']
  })
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
      p:nth-child(2):hover {
        text-decoration: underline;
        color: #38adff;
      }
    }
  }
</style>
