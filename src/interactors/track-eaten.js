export default class {
  constructor ({ entities, gateways }) {
    this.entities = entities
    this.gateway = gateways.make('intake')
  }

  process (request) {
    const { proteins, carbs, fats } = request.macros
    const macros = this.entities.make('macros', proteins, carbs, fats)
    this.gateway.add({
      name: request.name,
      quantity: request.quantity,
      macros,
      calories: macros.times(request.quantity).calories
    })

    return {}
  }
}
