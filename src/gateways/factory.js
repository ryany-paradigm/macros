import BalanceGateway from '@/gateways/balance'

export default class {
  constructor (store) {
    this.store = store
  }

  make (type) {
    if (type !== 'balance') {
      throw new TypeError(`Invalid gateway type: ${type}`)
    }

    return new BalanceGateway(this.store)
  }
}
