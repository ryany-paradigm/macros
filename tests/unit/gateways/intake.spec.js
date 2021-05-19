import { expect } from 'chai'
import { spy } from 'sinon'
import GatewayFactory from '@/gateways/factory'

describe('The intake gateway', () => {
  it('will get the current intakes', () => {
    const eaten = [
      { name: 'mocha', quantity: 1, macros: { proteins: 10, carbs: 38, fats: 17 } }
    ]
    const store = { state: { intake: { eaten } } }
    const factory = new GatewayFactory(store)
    const gateway = factory.make('intake')
    const result = gateway.get({})
    expect(result.eaten).to.deep.equal(eaten)
  })

  it('will add records to the intake log', () => {
    const dispatch = spy()
    const store = { dispatch }
    const factory = new GatewayFactory(store)
    const gateway = factory.make('intake')
    const command = {
      name: 'Mixed Nuts',
      quantity: 4,
      macros: { proteins: 5, carbs: 7, fats: 15, calories: 183 },
      calories: 732
    }

    const result = gateway.add(command)

    // eslint-disable-next-line no-unused-expressions
    expect(result).to.be.empty

    // eslint-disable-next-line no-unused-expressions
    expect(dispatch.calledWith('intake/add', command)).to.be.true
  })
})
