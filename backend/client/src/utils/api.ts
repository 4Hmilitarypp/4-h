import * as axios from 'axios'
import { ILiaison, IWebinar } from '../sharedTypes'
// import { IApiError } from '../sharedTypes'

let api: axios.AxiosInstance
// let isLoggedIn: boolean
const envBaseURL = process.env.REACT_APP_API_URL

const getData = (res: { data: object }) => res.data

const requests = {
  delete: (url: string): Promise<any> => api.delete(url).then(getData),
  get: (url: string): Promise<any> => api.get(url).then(getData),
  post: (url: string, body: object): Promise<any> => api.post(url, body).then(getData),
  put: (url: string, body: object): Promise<any> => api.put(url, body).then(getData),
}

/* const auth = {
  login: (form: { email?: string; username?: string; password: string }) =>
    requests.post('/auth/login', form).then((data: { user: IUser }) => {
      login({ token: data.user.token })
      return data
    }),
  logout: () => {
    logout()
    return Promise.resolve({})
  },
  me() {
    if (!isLoggedIn) {
      return Promise.resolve({})
    }
    return requests
      .get('/auth/me')
      .then((data: { user: IUser }) => Promise.resolve(data))
      .catch((err: IApiError) => {
        if (err.response.status === 401) {
          logout()
        }
        return Promise.reject(err)
      })
  },
  register: (form: Partial<IUser>) =>
    requests.post('/auth/register', form).then((data: any) => {
      login({ token: data.user.token })
      return data
    }),
}

const users = {
  create: (user: IUser) => requests.post('/users', user),
  delete: (id: string) => requests.delete(`/users/${id}`),
  get: (id?: string) => requests.get(id ? `/users/${id}` : '/users'),
  update: (id: string, updates: Partial<IUser>) => requests.put(`/users/${id}`, updates),
} */

const liaisons = {
  create: (data: ILiaison[]): Promise<ILiaison> => requests.post('/liaisons', data),
  delete: (id: string): Promise<string> => requests.delete(`/liaisons/${id}`),
  get: (): Promise<ILiaison[]> => requests.get('/liaisons'),
  update: (updates: ILiaison[]): Promise<ILiaison> => requests.put('/liaisons', updates),
}
const webinars = {
  create: (data: IWebinar[]): Promise<IWebinar> => requests.post('/webinars', data),
  delete: (id: string): Promise<string> => requests.delete(`/webinars/${id}`),
  get: (): Promise<IWebinar[]> => requests.get('/webinars'),
  update: (updates: IWebinar[]): Promise<IWebinar> => requests.put('/webinars', updates),
}

/* function logout() {
  window.localStorage.removeItem('token')
  init({ token: undefined })
}
function login({ token }: { token: string }) {
  window.localStorage.setItem('token', token)
  init({ token })
} */

function init({
  token = window.localStorage.getItem('token'),
  baseURL = (api && api.defaults.baseURL) || envBaseURL,
  axiosOptions = { headers: {} },
} = {}) {
  // isLoggedIn = Boolean(token)
  api = (axios as any).create({
    baseURL,
    ...axiosOptions,
    headers: {
      authorization: token ? `Bearer ${token}` : undefined,
      ...axiosOptions.headers,
    },
  })
}

const restApi = {
  // auth,
  init,
  liaisons,
  webinars,
  // users,
}

export default restApi
