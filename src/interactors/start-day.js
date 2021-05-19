export default class {
  constructor (gateways) {
    this.gateway = gateways.make('balance')
  }

  process (request) {
    this.gateway.store(request)
    return {}
  }
}
