import { NextFunction, Request, Response } from 'express'
import mongoose from 'mongoose'
import { IApiError } from './sharedTypes'

export type Controller = (req: Request, res: Response, next?: NextFunction) => Promise<Response>
export type Middleware = (req: Request, res: Response, next: NextFunction) => void
// export type CatchErrors = (req: Request, res: Response, next: NextFunction) => Promise<Response>
export type ErrorHandler = (err: IApiError, req: Request, res: Response, next: NextFunction) => Response | void
const hasNested = (err: any) => {
  for (const key in err.errors) {
    if (err.errors[key] && err.errors[key].name === 'ValidatorError') {
      return true
    }
  }
  return false
}
export const isValidationError = (err: Error): err is mongoose.Error.ValidationError =>
  err.name === 'ValidatorError' || hasNested(err)

export const isCastError = (err: Error): err is mongoose.Error.CastError => err.name === 'CastError'
