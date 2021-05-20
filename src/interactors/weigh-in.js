export default class {
  constructor ({ entities, gateways }) {
    this.entities = entities
    this.gateways = gateways
  }

  process (request) {
    const weights = this.gateways.make('weight')
    weights.add(request)
    return {}
  }
}
