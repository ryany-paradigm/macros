import { expect } from 'chai'
import { stub } from 'sinon'
import EntityFactory from '@/entities/factory'
import InteractorFactory from '@/interactors/factory'

const mocha = { proteins: 10, carbs: 38, fats: 17 }
const brownie = { proteins: 15, carbs: 31, fats: 10 }
const potatoSoftTaco = { proteins: 5, carbs: 27, fats: 12 }
const cheesyBeanAndRiceBurrito = { proteins: 10, carbs: 56, fats: 16 }
const cheesyRollUp = { proteins: 9, carbs: 15, fats: 9 }

describe('The get balance interactor', () => {
  let factory
  let getBalance
  let getIntake

  beforeEach(() => {
    const entities = new EntityFactory()
    const make = stub()
    const gateways = { make }
    factory = new InteractorFactory({ entities, gateways })
    getBalance = stub()
    getIntake = stub()

    make
      .withArgs('balance')
      .returns({ get: getBalance })

    make
      .withArgs('intake')
      .returns({ get: getIntake })
  })

  it('will calculate the appropriate remaining from balance and eaten', () => {
    getBalance.returns({ balance: { proteins: 187, carbs: 187, fats: 178 } })
    getIntake.returns({
      eaten: [
        { name: 'mocha', quantity: 1, macros: mocha },
        { name: 'brownie', quantity: 1, macros: brownie },
        { name: 'potato soft taco', quantity: 2, macros: potatoSoftTaco },
        { name: 'cheesy bean & rice burrito', quantity: 2, macros: cheesyBeanAndRiceBurrito },
        { name: 'cheesy rollup', quantity: 2, macros: cheesyRollUp }
      ]
    })

    const response = factory.make('get balance').process({})
    expect(response.balance).to.deep.equal({
      proteins: 114,
      carbs: -78,
      fats: 77,
      calories: 837
    })
  })
})
