export const getFromStorage = <T>(key: string): T | undefined => {
  const storageData = localStorage.getItem(key)

  if (storageData) {
    const serializedData: T = JSON.parse(storageData ?? '')
    return serializedData
  }
}

export const saveOnStorage = <T>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value))
}
