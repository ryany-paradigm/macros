<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/today">Today's Balance</router-link> |
    <router-link to="/log">Intake Log</router-link> |
    <router-link to="/food">Food Store</router-link>
  </div>

  <table class="balance">
    <caption>Balance</caption>
    <tr>
      <th>Proteins</th>
      <th>Carbs</th>
      <th>Fats</th>
    </tr>

    <tr>
      <td>{{balance.proteins}}</td>
      <td>{{balance.carbs}}</td>
      <td>{{balance.fats}}</td>
    </tr>
  </table>

  <router-view/>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('balance', ['balance'])
  },

  created () {
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.balance {
  margin: auto auto;
  text-align: left;
}
</style>
