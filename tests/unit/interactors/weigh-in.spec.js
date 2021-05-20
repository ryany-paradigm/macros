import { expect } from 'chai'
import { spy, stub } from 'sinon'
import EntityFactory from '@/entities/factory'
import InteractorFactory from '@/interactors/factory'

describe('The weigh-in interactor', () => {
  it('will succeed with no gateway issues', () => {
    const gateway = { add: spy() }
    const entities = new EntityFactory()
    const gateways = { make: stub() }
    gateways.make.withArgs('weight').returns(gateway)
    const factory = new InteractorFactory({ entities, gateways })
    const interactor = factory.make('weigh-in')
    const request = { weight: 84.82, date: new Date(2021, 5, 17) }
    const response = interactor.process(request)

    // eslint-disable-next-line no-unused-expressions
    expect(response).to.be.empty
    const call = gateway.add.getCall(0)
    expect(call.args[0]).to.deep.equal(request)
  })
})
