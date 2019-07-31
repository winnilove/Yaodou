<template>
   <router-view></router-view>
</template>
<script>
import Index from './pages/Index'
import Classify from './pages/cate/Classify'
export default {
  data(){
    return {
      msg:'hello'
    }
  },
  components:{
      Index ,
      Classify
  }
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
</style>
