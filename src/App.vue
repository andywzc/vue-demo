<template>
  <div id="app">

    <div>
      <router-link to="/comp">Go to Comp</router-link>
    </div>
    <div>
      <router-link to="/hello">Go to Hello</router-link>
    </div>
    <div>
      <router-link to="/tab">Go to Tab</router-link>
    </div>
    <div>
      <router-link to="/msgbox">Go to MsgBox</router-link>
    </div>
    <div>
      <router-link to="/login">Go to Login</router-link>
    </div>

    <div>
      <router-view></router-view>
    </div>

  </div>

</template>

<script>
export default {
  name: 'app'
}
</script>


