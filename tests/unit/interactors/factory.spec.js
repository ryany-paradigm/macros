import { expect } from 'chai'
import { stub } from 'sinon'
import EntityFactory from '@/entities/factory'
import InteractorFactory from '@/interactors/factory'
import GetBalanceInteractor from '@/interactors/get-balance'
import StartDayInteractor from '@/interactors/start-day'
import TrackEatenInteractor from '@/interactors/track-eaten'

describe('The interactor factory', () => {
  let factory

  beforeEach(() => {
    const entities = new EntityFactory()
    const gateways = { make: stub() }
    factory = new InteractorFactory({ entities, gateways })
  })

  it('will make get balance interactors', () => {
    const interactor = factory.make('get balance')
    expect(interactor).to.be.instanceof(GetBalanceInteractor)
  })

  it('will make start day interactors', () => {
    const interactor = factory.make('start day')
    expect(interactor).to.be.instanceof(StartDayInteractor)
  })

  it('will make track eaten interactors', () => {
    const interactor = factory.make('track eaten')
    expect(interactor).to.be.instanceof(TrackEatenInteractor)
  })

  it('will throw with invalid types', () => {
    const operation = () => factory.make('blbbbpbph')
    expect(operation).to.throw(TypeError)
  })
})
