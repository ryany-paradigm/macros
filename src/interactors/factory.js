import GetBalanceInteractor from '@/interactors/get-balance'
import StartDayInteractor from '@/interactors/start-day'
import TrackEatenInteractor from '@/interactors/track-eaten'

export default class {
  constructor ({ entities, gateways }) {
    this.entities = entities
    this.gateways = gateways
  }

  make (type) {
    if (type === 'get balance') {
      return new GetBalanceInteractor(this.dependencies)
    }

    if (type === 'start day') {
      return new StartDayInteractor(this.dependencies)
    }

    if (type === 'track eaten') {
      return new TrackEatenInteractor(this.dependencies)
    }

    throw new TypeError(`Invalid interactor type: ${type}`)
  }

  get dependencies () {
    return {
      entities: this.entities,
      gateways: this.gateways
    }
  }
}
