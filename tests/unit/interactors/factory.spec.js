import { expect } from 'chai'
import { stub } from 'sinon'
import EntityFactory from '@/entities/factory'
import InteractorFactory from '@/interactors/factory'
import GetBalanceInteractor from '@/interactors/get-balance'
import SetGoalInteractor from '@/interactors/set-goal'
import StartDayInteractor from '@/interactors/start-day'
import TrackEatenInteractor from '@/interactors/track-eaten'
import WeighInInteractor from '@/interactors/weigh-in'

describe('The interactor factory', () => {
  let factory

  beforeEach(() => {
    const entities = new EntityFactory()
    const gateways = { make: stub() }
    factory = new InteractorFactory({ entities, gateways })
  })

  it('will make get balance interactors', () => {
    expectInteractorFrom('get balance', GetBalanceInteractor)
  })

  const expectInteractorFrom = (text, type) => {
    const interactor = factory.make(text)
    expect(interactor).to.be.instanceof(type)
  }

  it('will make a weigh-in interactor', () => {
    expectInteractorFrom('weigh-in', WeighInInteractor)
  })

  it('will make set goal interactors', () => {
    expectInteractorFrom('set goal', SetGoalInteractor)
  })

  it('will make start day interactors', () => {
    expectInteractorFrom('start day', StartDayInteractor)
  })

  it('will make track eaten interactors', () => {
    expectInteractorFrom('track eaten', TrackEatenInteractor)
  })

  it('will throw with invalid types', () => {
    const operation = () => factory.make('blbbbpbph')
    expect(operation).to.throw(TypeError)
  })
})
