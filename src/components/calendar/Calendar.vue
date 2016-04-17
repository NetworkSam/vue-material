
<template>
  <div :class="classes.container">
    <slot></slot>
  </div>
</template>

<script type="text/babel">

  import Vue from 'vue'
  import jss from '../../util/jss'

  let sheet = jss.createStyleSheet({
    calendar:{
      maxWidth: 768
    },
    container:{
      
    }
  }).attach()


  export default {
    data () {
      retrurn {

      }
    },

    methods () {

    }
  }


</script>