
<template>
  <div class="hello">

    <mt-navbar v-model="selected">
      <mt-tab-item id="1">Mine</mt-tab-item>
      <mt-tab-item id="2">ALL</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-cell v-if="result">
          <div>{{ result.title }}</div>
          <div>
            <img v-bind:src="result.image"/>
          </div>
        </mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in result.tags" :title=" n.name + '&&&' + n.count " />
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        msg: 'i am belong to hello.vue',
        active: 'tab-container 1',
        selected: '1',
        result: ''
      }
    },
    mounted: function () {
      this.$http.jsonp('https://api.douban.com/v2/book/1220562').then(response => {
        this.result = response.body
      }, response => {
        alert('fail')
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
