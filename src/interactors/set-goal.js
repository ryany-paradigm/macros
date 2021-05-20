export default class {
  constructor ({ gateways }) {
    this.gateways = gateways
  }

  process (request) {
    const gateway = this.gateways.make('goal')
    gateway.set(request)
    return {}
  }
}
