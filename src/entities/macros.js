export default class Macros {
  static get empty () {
    return new Macros(0, 0, 0)
  }

  constructor (proteins, carbs, fats) {
    const descriptor =
      Object.getOwnPropertyDescriptor(Macros.prototype, 'calories')

    Object.defineProperty(this, 'calories', { ...descriptor, enumerable: true })
    this.proteins = proteins
    this.carbs = carbs
    this.fats = fats
  }

  get calories () {
    return 4 * this.proteins + 4 * this.carbs + 9 * this.fats
  }

  add (second) {
    return new Macros(
      this.proteins + second.proteins,
      this.carbs + second.carbs,
      this.fats + second.fats
    )
  }

  subtract (second) {
    return this.add(second.times(-1))
  }

  times (n) {
    return new Macros(
      n * this.proteins,
      n * this.carbs,
      n * this.fats
    )
  }

  factor (second) {
    const factors = [
      this.proteins / second.proteins,
      this.carbs / second.carbs,
      this.fats / second.fats
    ].sort()

    return factors[0]
  }
}
