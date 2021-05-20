import { expect } from 'chai'
import { spy, stub } from 'sinon'
import EntityFactory from '@/entities/factory'
import InteractorFactory from '@/interactors/factory'

describe('The set goal interactor', () => {
  it('will successfully set the goal to bulk without gateway issues', () => {
    const entities = new EntityFactory()
    const gateways = { make: stub() }
    const goal = { set: spy() }
    gateways.make.withArgs('goal').returns(goal)
    const factory = new InteractorFactory({ entities, gateways })
    const interactor = factory.make('set goal')
    const request = { goal: 'bulk' }
    const response = interactor.process(request)

    // eslint-disable-next-line no-unused-expressions
    expect(response).to.be.empty
    const call = goal.set.getCall(0)
    expect(call.args[0]).to.deep.equal(request)
  })
})
