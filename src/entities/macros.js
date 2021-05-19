export default class Macros {
  constructor (proteins, carbs, fats) {
    this.proteins = proteins
    this.carbs = carbs
    this.fats = fats
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
