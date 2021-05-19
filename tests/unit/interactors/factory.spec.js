import { expect } from 'chai'
import { stub } from 'sinon'
import InteractorFactory from '@/interactors/factory'
import StartDayInteractor from '@/interactors/start-day'

describe('The interactor factory', () => {
  let factory

  beforeEach(() => {
    const gateways = { make: stub() }
    factory = new InteractorFactory(gateways)
  })

  it('will make start day interactors', () => {
    const interactor = factory.make('start day')
    expect(interactor).to.be.instanceof(StartDayInteractor)
  })

  it('will throw with invalid types', () => {
    const operation = () => factory.make('blbbbpbph')
    expect(operation).to.throw(TypeError)
  })
})
