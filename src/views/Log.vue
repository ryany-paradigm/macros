<template>
  <div class="log">
    <h1>This is the intake log page</h1>
    <table class="intake">
      <caption>Intake</caption>
      <tr>
        <th>Name</th>
        <th>Quantity</th>
        <th>Proteins</th>
        <th>Carbs</th>
        <th>Fats</th>
        <th>Calories</th>
        <th>Total</th>
        <th>Remove?</th>
      </tr>

      <tr v-for="(intake, i) in eaten" :key="i">
        <td>{{intake.name}}</td>
        <td>{{intake.quantity}}</td>
        <td>{{intake.macros.proteins}}</td>
        <td>{{intake.macros.carbs}}</td>
        <td>{{intake.macros.fats}}</td>
        <td>{{intake.macros.calories}}</td>
        <td>{{intake.calories}}</td>
        <td><button @click="removeEaten">X</button></td>
      </tr>

      <tr>
        <td>
          <label for="name">Name</label>
          <input type="text" v-model="name" />
        </td>

        <td>
          <label for="quantity">Quantity</label>
          <input type="number" v-model="quantity" />
        </td>

        <td>
          <label for="proteins">Proteins</label>
          <input type="number" v-model="proteins" />
        </td>

        <td>
          <label for="carbs">Carbs</label>
          <input type="number" v-model="carbs" />
        </td>

        <td>
          <label for="fats">Fats</label>
          <input type="number" v-model="fats" />
        </td>

        <td colspan="2">&nbsp;</td>
        <td><button @click="trackEaten">Track Eaten</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      quantity: 0,
      proteins: 0,
      carbs: 0,
      fats: 0,
      eaten: []
    }
  },

  inject: ['interactors'],
  methods: {
    getEaten () {
      this.eaten = this.$store.state.intake.eaten
    },

    trackEaten () {
      const interactor = this.interactors.make('track eaten')
      interactor.process({
        name: this.name,
        quantity: parseFloat(this.quantity),
        macros: {
          proteins: parseFloat(this.proteins),
          carbs: parseFloat(this.carbs),
          fats: parseFloat(this.fats)
        }
      })

      this.getEaten()
      this.$emit('balanceChanged')
    },

    removeEaten () {
    }
  },

  emits: ['balanceChanged'],
  created () {
    this.getEaten()
  }
}
</script>

<style lang="less">
.intake {
  margin: auto auto;
}
</style>
