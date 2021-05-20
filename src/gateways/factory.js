import BalanceGateway from '@/gateways/balance'
import IntakeGateway from '@/gateways/intake'
import WeightGateway from '@/gateways/weight'

export default class {
  constructor (store) {
    this.store = store
  }

  make (type) {
    const conversions = {
      balance: BalanceGateway,
      intake: IntakeGateway,
      weight: WeightGateway
    }

    if (Object.hasOwnProperty.call(conversions, type)) {
      return new conversions[type](this.store)
    }

    throw new TypeError(`Invalid gateway type: ${type}`)
  }
}
