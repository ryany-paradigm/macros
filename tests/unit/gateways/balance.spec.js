import { expect } from 'chai'
import { spy } from 'sinon'
import GatewayFactory from '@/gateways/factory'

describe('The balance gateway', () => {
  it('will get balances', () => {
    const balance = { proteins: 100, carbs: 100, fats: 100, calories: 1700 }
    const store = { state: { balance: { balance } } }
    const factory = new GatewayFactory(store)
    const gateway = factory.make('balance')
    const result = gateway.get({})
    expect(result.balance).to.deep.equal(balance)
  })

  it('will store balances', () => {
    const dispatch = spy()
    const store = { dispatch }
    const factory = new GatewayFactory(store)
    const gateway = factory.make('balance')
    const request = { proteins: 187, carbs: 187, fats: 178 }
    const result = gateway.store(request)

    // eslint-disable-next-line no-unused-expressions
    expect(result).to.be.empty

    // eslint-disable-next-line no-unused-expressions
    expect(dispatch.calledWith('balance/store', request)).to.be.true
  })
})
