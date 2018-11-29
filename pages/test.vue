<template>
  <section class="container">
    <div>
      <h1 class="title">
        <button
          class="button--grey"
          @click="handleClick()">{{ project.b }}</button>
        <!-- <p>{{ context.req }}</p> -->
        <nuxt-link to="/">TEST</nuxt-link>
        <Test1 :child-data="project"/>
      </h1>
    </div>
  </section>
</template>

<script>
import Test1 from '~/components/hahah.vue'

export default {
  name: 'Test',
  head () {
    return {
      title: 'text'
    }
  },
  async asyncData ({app, query}) {
    console.log(query)
    let project  = await app.$axios.$get('http://127.0.0.1:3000/test1')
    return {project, query}
  },
  components: {
    Test1
  },
  data () {
    return {
      loadingAnimation: ''
    }
  },
  methods: {
    handleClick () {
      // console.log()
      const that = this
      that.$axios.$get('http://127.0.0.1:3000/test1').then(res => {
        // console.log(res1)
        console.log(that)
        that.project = {a: 'ok', b: 'complate'}
        // return {project: res.data}
      }).catch(err => {
        // console.log('error')
        console.dir(err)
        // return {project: 'error'}
      })
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  /* margin-top: 40px; */
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.container>div {
  animation: slideup .36s ease-in;
}
@keyframes slideup {
  0% {
    transform: translateY(120px);
  }
  100% {
    transform: translateY(0);
  }
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
