import { IApiError } from '../sharedTypes'
const notFoundError: IApiError = new Error()
notFoundError.type = 'itemNotFound'
export { notFoundError }
