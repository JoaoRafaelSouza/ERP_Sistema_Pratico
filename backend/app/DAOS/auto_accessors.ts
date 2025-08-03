export function AutoAccessors<T extends { new (...args: any[]): {} }>(constructor: T) {
  const prototype = constructor.prototype
  const ignore = ['constructor', 'save', 'delete', 'serialize']

  for (const key of Reflect.ownKeys(prototype)) {
    if (typeof key !== 'string') continue
    if (key.startsWith('_') || ignore.includes(key)) continue
    if (key.startsWith('get') || key.startsWith('set')) continue // evita sobrescrever métodos existentes

    const capitalized = key.charAt(0).toUpperCase() + key.slice(1)

    const getterName = `get${capitalized}`
    const setterName = `set${capitalized}`

    if (!Object.prototype.hasOwnProperty.call(prototype, getterName)) {
      Object.defineProperty(prototype, getterName, {
        value: function () {
          return this[key]
        },
        writable: false,
        enumerable: false,
      })
    }

    if (!Object.prototype.hasOwnProperty.call(prototype, setterName)) {
      Object.defineProperty(prototype, setterName, {
        value: function (value: any) {
          this[key] = value
        },
        writable: false,
        enumerable: false,
      })
    }
  }
}
