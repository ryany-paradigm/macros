import { expect } from 'chai'
import { spy, stub } from 'sinon'
import EntityFactory from '@/entities/factory'
import InteractorFactory from '@/interactors/factory'

describe('The start day interactor', () => {
  it('will store the given balance', () => {
    const make = stub()
    const store = spy()
    const entities = new EntityFactory()
    const gateways = { make }
    make.returns({ store })
    const factory = new InteractorFactory({ entities, gateways })
    const interactor = factory.make('start day')
    const request = { proteins: 187, carbs: 187, fats: 178 }
    const response = interactor.process(request)

    // eslint-disable-next-line no-unused-expressions
    expect(response).to.be.empty
    const call = store.getCall(0)
    expect(call.args).to.deep.equal([{
      ...request,
      calories: 3098
    }])
  })
})
