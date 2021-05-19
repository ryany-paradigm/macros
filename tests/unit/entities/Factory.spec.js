import { expect } from 'chai'
import EntityFactory from '@/entities/factory'
import Macros from '@/entities/macros'

describe('The entity factory', () => {
  let factory

  beforeEach(() => {
    factory = new EntityFactory()
  })

  it('will make macros', () => {
    const macros = factory.make('macros')
    expect(macros).to.be.instanceof(Macros)
    expect(macros).to.deep.equal({
      proteins: 0,
      carbs: 0,
      fats: 0
    })
  })

  it('will throw with an invalid type', () => {
    const operation = () => factory.make('macros type f')
    expect(operation).to.throw(TypeError)
  })
})
