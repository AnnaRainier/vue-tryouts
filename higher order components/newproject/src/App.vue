<template>
  <div id="app">
    <center><h1>Vue.js higher order components</h1></center>
    <el-container>
      <el-main style="padding: 0px;">
        <el-row>
          <el-col :span="12">
            <users></users>
          </el-col>
          <el-col :span="12">
            <products></products>
          </el-col>
        </el-row>

      </el-main>
    </el-container>
  </div>
</template>

<script>
import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'

import Users from './components/users'
import Products from './components/products'
import appSection from './components/appSection'

// Vue.mixin({
//   created() {
//     console.log('created in global mixin');
//   }
// })
//копий глобального миксина будет столько, сколько и компонентов во вью приложении
//поэтому его не рекомендуют использ глобально

let sectionUsers = appSection(Users, 'users');
let sectionProducts = appSection(Products, 'products');
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'Users': sectionUsers, 
    'Products': sectionProducts
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
