import BalanceGateway from '@/gateways/balance'
import IntakeGateway from '@/gateways/intake'

export default class {
  constructor (store) {
    this.store = store
  }

  make (type) {
    if (type === 'balance') {
      return new BalanceGateway(this.store)
    }

    if (type === 'intake') {
      return new IntakeGateway(this.store)
    }

    throw new TypeError(`Invalid gateway type: ${type}`)
  }
}
