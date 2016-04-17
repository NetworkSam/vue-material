<template>
  <div>
    <header>
      <h1>Components</h1>
      <nav>
        <ul>
          <li>
            <a href="https://github.com/vue-material/vue-material">
              Github
            </a>
          </li>
        </ul>
      </nav>
    </header>
    <div class="main-wrapper">
      <nav>
        <ul>
          <li class="first">
            <div>Components</div>
            <ul>
              <li v-for="item in items"  v-bind:class="{ 'second': item.isSecond, 'active': item.isActive}" v-on:click="active($index)">
                  <a href="{{ item.href }}">{{ item.name }}</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
  /**
  * @author samuel 作者
  * @time 2016/04/17 23:20 时间
  * @version 1.0 版本
  */
  export default{
    data () {
      return {
        items: [
          {
            href: '#/components/button',
            isSecond: true,
            isActive: true,
            name: 'Button'
          },
          {
            href: '#/components/calendar',
            isSecond: true,
            isActive: false,
            name: 'Calendar'
          }
        ]
      }
    },
    methods: {
      active ($index) {
        this.items.forEach((item, index) => {
          item.isActive = false
        })
        this.items[$index].isActive = true
      }
    },
    components: {}
  }
</script>
