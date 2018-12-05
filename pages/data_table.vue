<template>
  <div class="test">
    <h2>from database</h2>
    <table
      cellspacing="0"
      paddingspacing="0"
      border="1"
    >
      <tbody>
        <tr>
          <td
            v-for="(item, index) in titleList"
            :key="index">{{ item.name }}</td>
        </tr>
        <tr
          v-for="elem in list"
          :key="elem.key">
          <td
            v-for="(item, index) in titleList"
            :key="index">{{ elem[item.key] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: 'Test1',
  head () {
    return {title: '数据库数据'}
  },
  async asyncData ({query, app}) {
    let {list}  = await app.$axios.$get('http://127.0.0.1:3000/test2')
    return { list }
  },
  data () {
    return {
      // list: [],
      titleList: [
        {name: '_id', key: 'id'},
        {name: '货物名称', key: 'product_name'},
        {name: '货物单位',  key: 'product_unit'},
        {name: '货物数量',  key: 'product_quantity'},
        {name: '货物价格',  key: 'product_contents'}
      ],
    }
  },
  mounted() {
    //do something after mounting vue instance
    // app.$axios.$get('http://127.0.0.1:3000/test2').then((res) => {
    //   this.list = res.list
    // })
  },
  methods: {
    handleClick () {
      console.log(this)
      // alert('hahahha')
    }
  }
}
</script>
<style media="screen">
  h2 {
    line-height: 46px;
    text-align: center;
  }
  table {
    width: 1200px;
    border: 1px solid #111;
    margin: 0 auto;
    padding: 0;
  }
  tr {
    height: 36px;
  }
  td {
    text-align: center;
  }
</style>
