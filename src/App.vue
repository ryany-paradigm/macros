<template>
  <div id="nav" >
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
      <th>Calories</th>
    </tr>

    <tr>
      <td>{{balance.proteins}}</td>
      <td>{{balance.carbs}}</td>
      <td>{{balance.fats}}</td>
      <td>{{balance.calories}}</td>
    </tr>
  </table>

  <router-view @balance-changed="getBalance" />
</template>

<script>
import EntityFactory from '@/entities/factory'
import InteractorFactory from '@/interactors/factory'
import GatewayFactory from '@/gateways/factory'

export default {
  data () {
    return {
      balance: { proteins: 0, carbs: 0, fats: 0, calories: 0 },
      interactors: {}
    }
  },

  methods: {
    getBalance () {
      const interactor = this.interactors.make('get balance')
      const response = interactor.process({})
      this.balance = response.balance
    }
  },

  provide () {
    const entities = new EntityFactory()
    const gateways = new GatewayFactory(this.$store)
    this.interactors = new InteractorFactory({ entities, gateways })
    return { interactors: this.interactors }
  },

  created () {
    this.getBalance()
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
