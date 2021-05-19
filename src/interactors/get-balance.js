export default class {
  constructor ({ entities, gateways }) {
    this.entities = entities
    this.balances = gateways.make('balance')
    this.intakes = gateways.make('intake')
  }

  process (request) {
    const { eaten } = this.intakes.get()
    const macros = this.toMacros(this.balances.get().balance)
    const balance = eaten.reduce((total, { quantity, macros: record }) =>
      total.subtract(this.toMacros(record).times(quantity)), macros)

    return { balance }
  }

  toMacros ({ proteins, carbs, fats }) {
    return this.entities.make('macros', proteins, carbs, fats)
  }
}
