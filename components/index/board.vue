<template>
  <div id="board">
    <ul>
      <li
        v-for="(item, index) in showTitle"
        :key="index"
        class="index_"
      >
        <p>{{ item }}</p>
        <p>{{ dataList[index] }}</p>
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
      height: 160px;
      border: 1px solid #acacac;
      margin: 0 10px;
    }
  }
</style>
