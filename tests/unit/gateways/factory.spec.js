import { expect } from 'chai'
import { spy } from 'sinon'
import GatewayFactory from '@/gateways/factory'
import BalanceGateway from '@/gateways/balance'
import IntakeGateway from '@/gateways/intake'
import WeightGateway from '@/gateways/weight'

describe('The gateway factory', () => {
  let factory

  beforeEach(() => {
    const dispatch = spy()
    const store = { dispatch }
    factory = new GatewayFactory(store)
  })

  it('will make balance gateways', () => {
    const gateway = factory.make('balance')
    expect(gateway).to.be.instanceof(BalanceGateway)
  })

  it('will make intake gateways', () => {
    const gateway = factory.make('intake')
    expect(gateway).to.be.instanceof(IntakeGateway)
  })

  it('will make weight gateways', () => {
    const gateway = factory.make('weight')
    expect(gateway).to.be.instanceof(WeightGateway)
  })

  it('will throw with invalid types', () => {
    const operation = () => factory.make('balance beam')
    expect(operation).to.throw(TypeError)
  })
})
