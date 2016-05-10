
<template>
  <div :class="classes.container">
    <div :class="classes.header">
       <div :class="classes.year">2016</div>
       <div :class="classes.date">Tue, Apr 19</div>
    </div>

    <div :class="classes.selectContainer">
      <div :class="classes.back">
        <button :class="classes.button">&lt;</button>
      </div>
      <div :class="classes.go">
        <button :class="classes.button">&gt;</button>
      </div>
      <div :class="classes.selectDate">
        <div :class="classes.selectDateVerbos">July 2016</div>
      </div>
    </div>

    <ul :class="classes.weekdays">
      <div :class="classes.clearfix"></div>
      <li  :class="classes.weekday">S</li>
      <li  :class="classes.weekday">M</li>
      <li  :class="classes.weekday">T</li>
      <li  :class="classes.weekday">W</li>
      <li  :class="classes.weekday">T</li>
      <li  :class="classes.weekday">F</li>
      <li  :class="classes.weekday">S</li>
      <div :class="classes.clearfix"></div>
    </ul>
    
  </div>
</template>
<script type="text/babel">
  /*
  *@author  samuel             作者
  *@date    2016.04.19 23:35   时间
  *@dec     calendar           组件名
  *@version v1.0.0             版本号
  */
  import jss from '../../util/jss'
  let sheet = jss.createStyleSheet({
    container: {
      width: 320,
      height: 'auto'
    },
    header: {
      backgroundColor: '#0097a7',
      borderTopLeftRadius: 2,
      borderTopRightRadius: 2,
      color: '#fff',
      height: 'auto',
      padding: 20
    },
    year: {
      marginBottom: 10,
      fontSize: 16
    },
    date: {
      height: 38,
      fontSize: 36
    },
    selectContainer: {
      width: 320,
      height: 48,
      position: 'relative'
    },
    button: {
      height: 24,
      width: 24
    },
    back: {
      padding: 12,
      float: 'left'
    },
    go: {
      padding: 12,
      float: 'right'
    },
    selectDate: {
      position: 'absolute',
      height: '100%',
      width: '100%',
      top: 0,
      left: 0
    },
    selectDateVerbos: {
      position: 'absolute',
      height: 14,
      top: 17,
      fontSize: 14,
      width: '100%',
      textAlign: 'center',
      color: '#000'
    },
    weekdays: {
      paddingLeft: 14,
      paddingRight: 14,
      opacity: 0.5,
      height: 12,
      fontWeight: 500,
      margin: 0
    },
    weekday: {
      listStyle: 'none',
      float: 'left',
      width: 37,
      textAlign: 'center',
      marginLeft: 2,
      marginRight: 2,
      fontSize: 12
    },
    clearfix: {
      boxSizing: 'border-box',
      content: ' ',
      display: 'table'
    }
  }).attach()

  console.log(sheet.classes)

  export default {
    data () {
      return {
        classes: sheet.classes
      }
    },
    methods () {

    }
  }
</script>