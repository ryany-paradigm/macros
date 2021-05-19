import { expect } from 'chai'
import { spy, stub } from 'sinon'
import EntityFactory from '@/entities/factory'
import InteractorFactory from '@/interactors/factory'

describe('The track eaten interactor', () => {
  let add
  let factory

  beforeEach(() => {
    const entities = new EntityFactory()
    const make = stub()
    const gateways = { make }
    add = spy()
    make.returns({ add })
    factory = new InteractorFactory({ entities, gateways })
  })

  it('will modify the eaten list', () => {
    const interactor = factory.make('track eaten')
    const request = {
      name: 'Mixed Nuts',
      quantity: 4,
      macros: { proteins: 5, carbs: 7, fats: 15 }
    }

    const response = interactor.process(request)

    // eslint-disable-next-line no-unused-expressions
    expect(response).to.be.empty

    const { args: [command] } = add.getCall(0)
    expect(command).to.deep.equal({
      ...request,
      macros: { ...request.macros, calories: 183 },
      calories: 732
    })
  })
})
