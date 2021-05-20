import GetBalanceInteractor from '@/interactors/get-balance'
import SetGoalInteractor from '@/interactors/set-goal'
import StartDayInteractor from '@/interactors/start-day'
import TrackEatenInteractor from '@/interactors/track-eaten'
import WeighInInteractor from '@/interactors/weigh-in'

export default class {
  constructor ({ entities, gateways }) {
    this.entities = entities
    this.gateways = gateways
  }

  make (type) {
    const conversions = {
      'get balance': GetBalanceInteractor,
      'set goal': SetGoalInteractor,
      'start day': StartDayInteractor,
      'track eaten': TrackEatenInteractor,
      'weigh-in': WeighInInteractor
    }

    if (Object.hasOwnProperty.call(conversions, type)) {
      return new conversions[type](this.dependencies)
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
