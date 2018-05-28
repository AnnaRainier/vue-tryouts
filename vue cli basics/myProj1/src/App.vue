<template>
  <div id="app">
    <my-head>
      <h1>routing in Vue.js</h1>
      <span>{{ secondPart }}</span>
      <h2 slot="subtitle">Slots</h2>
      <span slot="subtitle">Slots - second part</span>
    </my-head>
    <div class="container">
      <router-view></router-view>
      </div>
      <!--<product-details class="details"></product-details>
      <product-add class="prod-add"></product-add>-->
      
    </div>
  </div>
</template>

<script>
import Header from './Header.vue';


export default {
  name: 'app',
  data () {
    return {
      secondPart: 'test second part',
      mode: 'view'

    }
  },
  computed: {
    componentName() {
      return this.mode == 'view' ? 'ProductDetails' : 'ProductAdd';
    }
  }, 
  components: {
    'my-head': Header,

  },
}
</script>

<style>
.list {
  width: 500px;
  float: left;
}
  .details {
    width: 400px;
    float: right;
    vertical-align: top;
  }
  .prod-add {
    border: 1px solid red;
    width: 400px;
    float: right;
    vertical-align: top;
    margin: 2px;
    padding: 2px;
    border-radius: 4px;
  }
</style>
