import Macros from './macros'

export default class {
  make (type, ...args) {
    if (type !== 'macros') {
      throw new TypeError(`Invalid entity type: ${type}`)
    }

    return args.length ? new Macros(...args) : Macros.empty
  }
}
