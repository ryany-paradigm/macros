import Macros from './macros'

export default class {
  make (type) {
    if (type !== 'macros') {
      throw new TypeError(`Invalid entity type: ${type}`)
    }

    return new Macros(0, 0, 0)
  }
}
