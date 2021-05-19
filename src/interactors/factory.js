import StartDayInteractor from '@/interactors/start-day'

export default class {
  constructor (gateways) {
    this.gateways = gateways
  }

  make (type) {
    if (type !== 'start day') {
      throw new TypeError(`Invalid interactor type: ${type}`)
    }

    return new StartDayInteractor(this.gateways)
  }
}
