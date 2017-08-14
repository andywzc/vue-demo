<template>
  <div>
    <mt-button type="default" @click="alertMsg">
      MessageBox
    </mt-button>
  </div>
</template>

<script>
  import { MessageBox, Toast } from 'mint-ui'

  export default {
    name: 'msg',
    methods: {
      alertMsg: function () {
        MessageBox.confirm('', {
          title: 'Title',
          message: 'Are You Sure',
          showConfirmButton: true,
          showCancelButton: true
        }).then(action => {
          Toast({
            message: 'success',
            position: 'bottom',
            duration: 3000
          })
          this.$router.push({path: '/tab'})
        })
      }
    }
  }
</script>
