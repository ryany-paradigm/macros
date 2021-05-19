import StartDayInteractor from '@/interactors/start-day'
import TrackEatenInteractor from '@/interactors/track-eaten'

export default class {
  constructor ({ entities, gateways }) {
    this.entities = entities
    this.gateways = gateways
  }

  make (type) {
    if (type === 'start day') {
      return new StartDayInteractor(this.gateways)
    }

    if (type === 'track eaten') {
      return new TrackEatenInteractor({
        entities: this.entities,
        gateways: this.gateways
      })
    }

    throw new TypeError(`Invalid interactor type: ${type}`)
  }
}
