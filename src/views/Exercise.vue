<template>
  <div class="today">
    <h1>This is today's balance page</h1>

    <label for="proteins">Proteins</label>
    <input v-model="proteins" name="proteins" type="number" label="Proteins" />
    <label for="carbs">Carbs</label>
    <input v-model="carbs" name="carbs" type="number" label="Carbs" />
    <label for="fats">Fats</label>
    <input v-model="fats" name="fats" type="number" label="Fats" />
    <button @click="startTheDay">Start the Day</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      proteins: 0,
      carbs: 0,
      fats: 0,
      calories: 0
    }
  },

  methods: {
    startTheDay () {
      const interactor = this.interactors.make('start day')
      interactor.process({
        proteins: parseFloat(this.proteins),
        carbs: parseFloat(this.carbs),
        fats: parseFloat(this.fats)
      })

      this.$emit('balanceChanged')
    }
  },

  inject: ['interactors'],
  emits: ['balanceChanged']
}
</script>
