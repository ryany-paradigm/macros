import { expect } from 'chai'
import Macros from '@/entities/macros'

describe('The macros entity', () => {
  let macros

  beforeEach(() => {
    macros = new Macros(1, 2, 3)
  })

  it('will have a proteins property', () => {
    expect(macros.proteins).to.equal(1)
  })

  it('will have a carbs property', () => {
    expect(macros.carbs).to.equal(2)
  })

  it('will have a fats property', () => {
    expect(macros.fats).to.equal(3)
  })

  describe('calories message', () => {
    it('will accurately total the amount of calories from the given macros', () => {
      expect(macros.calories).to.equal(39)
    })
  })

  describe('add message', () => {
    let result

    beforeEach(() => {
      const second = new Macros(4, 5, 6)
      result = macros.add(second)
    })

    it('will correctly update the proteins value', () => {
      expect(result.proteins).to.equal(5)
    })

    it('will correctly update the carbs value', () => {
      expect(result.carbs).to.equal(7)
    })

    it('will correctly update the fats value', () => {
      expect(result.fats).to.equal(9)
    })

    it('will not modify the original value', () => {
      expect(macros.proteins).to.not.equal(result.proteins)
      expect(macros.carbs).to.not.equal(result.carbs)
      expect(macros.fats).to.not.equal(result.fats)
    })
  })

  describe('subtract message', () => {
    let result

    beforeEach(() => {
      const second = new Macros(10, 11, 12)
      result = second.subtract(macros)
    })

    it('will correctly update the proteins value', () => {
      expect(result.proteins).to.equal(9)
    })

    it('will correctly update the carbs value', () => {
      expect(result.carbs).to.equal(9)
    })

    it('will correctly update the fats value', () => {
      expect(result.fats).to.equal(9)
    })

    it('will not modify the original value', () => {
      expect(macros.proteins).to.not.equal(result.proteins)
      expect(macros.carbs).to.not.equal(result.carbs)
      expect(macros.fats).to.not.equal(result.fats)
    })
  })

  describe('times message', () => {
    let result

    beforeEach(() => {
      result = macros.times(10)
    })

    it('will correctly update the proteins value', () => {
      expect(result.proteins).to.equal(10)
    })

    it('will correctly update the carbs value', () => {
      expect(result.carbs).to.equal(20)
    })

    it('will correctly update the fats value', () => {
      expect(result.fats).to.equal(30)
    })

    it('will not modify the original value', () => {
      expect(macros.proteins).to.not.equal(result.proteins)
      expect(macros.carbs).to.not.equal(result.carbs)
      expect(macros.fats).to.not.equal(result.fats)
    })
  })

  describe('factor message', () => {
    const ones = new Macros(1, 1, 1)

    it('will return the lowest factor available', () => {
      expect(macros.factor(ones)).to.equal(1)
    })

    it('will return more lowest factors', () => {
      const twos = new Macros(2, 2, 2)
      expect(twos.factor(ones)).to.equal(2)
      expect(ones.factor(twos)).to.equal(0.5)
    })
  })

  describe('empty', () => {
    it('will make an empty macros object', () => {
      expect(Macros.empty).to.deep.equal({
        proteins: 0,
        carbs: 0,
        fats: 0,
        calories: 0
      })
    })
  })
})
