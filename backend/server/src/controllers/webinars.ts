import mongoose from 'mongoose'
import { IWebinar } from '../sharedTypes'
import { Controller } from '../types'
import { notFoundError } from '../utils/errors'

const Webinar = mongoose.model('Webinar')

const formatWebinar = (dbWebinar: any): IWebinar => {
  const { _id, category, description, title, url } = dbWebinar
  const webinarId = _id.toString()
  return { category, description, title, url, webinarId }
}

export const createWebinar: Controller = async (req, res) => {
  const dirtyWebinar = await new Webinar(req.body).save()
  return res.status(201).json(formatWebinar(dirtyWebinar))
}

export const getWebinars: Controller = async (req, res) => {
  const dirtyWebinars = await Webinar.find()
  const webinars = dirtyWebinars.map(formatWebinar)
  return res.json(webinars)
}

export const updateWebinar: Controller = async (req, res) => {
  const { webinarId, ...updates } = req.body
  const dirtyWebinar = await Webinar.findOneAndUpdate({ _id: webinarId }, updates, {
    context: 'query',
    new: true,
    runValidators: true,
  })
  if (dirtyWebinar) {
    return res.status(200).json(formatWebinar(dirtyWebinar))
  }
  throw notFoundError
}

export const deleteWebinar: Controller = async (req, res) => {
  const deletedWebinar = await Webinar.findByIdAndDelete(req.params.id)
  if (deletedWebinar) {
    return res.status(204).send()
  }
  throw notFoundError
}
