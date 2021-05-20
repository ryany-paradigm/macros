import { expect } from 'chai'
import { spy } from 'sinon'
import GatewayFactory from '@/gateways/factory'

describe('The weight gateway', () => {
  it('will add a weight to the weigh-in list', () => {
    const store = { dispatch: spy() }
    const gateways = new GatewayFactory(store)
    const gateway = gateways.make('weight')
    const command = { weight: 84, date: new Date(2021, 5, 17) }
    const result = gateway.add(command)

    // eslint-disable-next-line no-unused-expressions
    expect(result).to.be.empty
    const call = store.dispatch.getCall(0)
    expect(call.args).to.deep.equal(['weight/add', command])
  })
})
