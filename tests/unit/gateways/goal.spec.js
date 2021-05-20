import { expect } from 'chai'
import { spy } from 'sinon'
import GatewayFactory from '@/gateways/factory'

describe('The goal gateway', () => {
  let store
  let gateway

  beforeEach(() => {
    store = { dispatch: spy() }
    const gateways = new GatewayFactory(store)
    gateway = gateways.make('goal')
  })

  it('will set the current goal to bulk successfully', () => {
    const command = { goal: 'bulk' }
    const result = gateway.set(command)
    expectDispatchCalledWith(result, ['goal/set', 'bulk'])
  })

  const expectDispatchCalledWith = (result, args) => {
    // eslint-disable-next-line no-unused-expressions
    expect(result).to.be.empty
    const call = store.dispatch.getCall(0)
    expect(call.args).to.deep.equal(args)
  }

  it('will set the current goal to maintain successfully', () => {
    const command = { goal: 'maintain' }
    const result = gateway.set(command)
    expectDispatchCalledWith(result, ['goal/set', 'maintain'])
  })

  it('will set the current goal to cut successfully', () => {
    const command = { goal: 'cut' }
    const result = gateway.set(command)
    expectDispatchCalledWith(result, ['goal/set', 'cut'])
  })

  it('will throw with any other value', () => {
    const command = { goal: 'some other stupid value geeze' }
    const operation = () => gateway.set(command)
    expect(operation).to.throw(TypeError)
  })
})
