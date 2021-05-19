export default class {
  constructor ({ entities, gateways }) {
    this.entities = entities
    this.gateway = gateways.make('balance')
  }

  process ({ proteins, carbs, fats }) {
    const macros = this.entities.make('macros', proteins, carbs, fats)
    this.gateway.store({
      proteins,
      carbs,
      fats,
      calories: macros.calories
    })

    return {}
  }
}
