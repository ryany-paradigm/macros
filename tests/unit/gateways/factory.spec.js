import { expect } from 'chai'
import { spy } from 'sinon'
import GatewayFactory from '@/gateways/factory'
import BalanceGateway from '@/gateways/balance'

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

  it('will throw with invalid types', () => {
    const operation = () => factory.make('balance beam')
    expect(operation).to.throw(TypeError)
  })
})
