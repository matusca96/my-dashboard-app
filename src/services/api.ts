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

export const post = async <T>(body: T): Promise<T> => {
  return await fetchApi({
    url: BASE_URL,
    options: {
      ...options,
      method: 'post',
      body: JSON.stringify(body)
    }
  })
}

// fake put, the json api works only with ids between 1-10
export const put = async <T>(body: T): Promise<T> => {
  return await fetchApi({
    url: `${BASE_URL}/1`,
    options: {
      ...options,
      method: 'put',
      body: JSON.stringify(body)
    }
  })
}

// fake delete, the json api works only with ids between 1-10
export const deleteMethod = async <T>(): Promise<T> => {
  return await fetchApi({
    url: `${BASE_URL}/1`,
    options: {
      ...options,
      method: 'delete'
    }
  })
}

export const fetchApi = async <T>({ url, options }: FetchProps): Promise<T> => {
  return await fetch(url, options).then(async (response) => {
    if (!response.ok) {
      throw new Error(response.statusText)
    }

    return await response.json().then((data) => data as T)
  })
}
