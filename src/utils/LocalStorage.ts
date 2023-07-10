export namespace LocalStorageUtils {
  const APP_STORAGE_KEY_PREFIX = 'rocket-cycles'

  function getKey(key: string) {
    const mode = import.meta.env.MODE

    return `${APP_STORAGE_KEY_PREFIX}:${mode}:${key}`
  }

  export function store<T = unknown>(key: string, value: T) {
    localStorage.setItem(getKey(key), JSON.stringify(value))
  }

  export function retrieve<T>(key: string) {
    const item = localStorage.getItem(getKey(key))

    if (!item) {
      return undefined
    }

    const payload = JSON.parse(item)

    return payload as T
  }

  export function remove(key: string) {
    localStorage.removeItem(getKey(key))
  }
}
