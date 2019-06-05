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
          v-for="(elem, listIndex) in list"
          :key="elem.key">
          <td
            v-for="(item, index) in titleList"
            :key="index">{{ elem[item.key] || (listIndex + 1) }}</td>
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
    return {
      titleList: [
        {name: '_index', key: ''},
        {name: '货物名称', key: 'id'},
        {name: '货物单位',  key: 'userID'},
        {name: '货物数量',  key: 'name'}
      ]
    }
  },
  data () {
    return {
      // list: [],
    }
  },
  computed: {
    list: function () {
      return this.$store.getters.businessList
    }
  },
  mounted () {
    console.log(this.$store)
    this.$store.dispatch('api_buiness_list')
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
