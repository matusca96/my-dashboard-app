type FetchProps = {
  url: string
  options: RequestInit
}

const BASE_URL =
  'https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data'

const options: RequestInit = {
  method: 'get',
  headers: {
    'Content-Type': 'application/json',
    'x-access-token': 'token-value'
  }
}

export const get = async <T>(params?: string): Promise<T> => {
  const url = new URL(BASE_URL)
  url.search = String(new URLSearchParams(params))

  return await fetchApi({ url: String(url), options })
}

export const fetchApi = async <T>({ url, options }: FetchProps): Promise<T> => {
  return await fetch(url, options).then(async (response) => {
    if (!response.ok) {
      throw new Error(response.statusText)
    }

    return await response.json().then((data) => data as T)
  })
}
