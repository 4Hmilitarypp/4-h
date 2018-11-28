import { omit } from 'lodash'
import mongoose from 'mongoose'
import request from 'supertest'
import app from '../../app'
import generate from '../../utils/generate'

process.env.TEST_SUITE = 'webinars'

const Webinar = mongoose.model('Webinar')

/**
 * GET
 */
it('should return a 200 if get was successful', async () => {
  const webinar = generate.webinar()
  await new Webinar(webinar).save()
  const inDb = await Webinar.find()
  expect(inDb).toHaveLength(1)

  const res = await request(app).get('/api/webinars')
  expect(res.status).toBe(200)
  expect(res.body).toEqual([{ ...webinar, webinarId: expect.any(String) }])
})

/**
 * POST
 */
it('should return a 201 if created was successful', async () => {
  const webinar = generate.webinar()

  const res = await request(app)
    .post('/api/webinars')
    .send(webinar)

  expect(res.status).toBe(201)
  expect(res.body).toEqual({ ...webinar, webinarId: expect.any(String) })
  const inDb = await Webinar.find()
  expect(inDb[0]).toMatchObject({ ...omit(webinar, 'webinarId') })
})

it('should return a 400 if a webinar with a bad form is created', async () => {
  const webinar = generate.webinar(100, { description: null })
  const res = await request(app)
    .post('/api/webinars')
    .send(webinar)

  expect(res.status).toEqual(400)
  expect(res.body).toEqual({ message: expect.any(String) })
  const finalInDb = await Webinar.find()
  expect(finalInDb).toHaveLength(0)
})

/**
 * PUT
 */
it('should return a 200 if the update was successful', async () => {
  const originalWebinar = generate.webinar()
  const inDb = await new Webinar(originalWebinar).save()
  expect(inDb).toMatchObject({ ...omit(originalWebinar, 'webinarId') })

  const updateWebinar = generate.webinar()
  updateWebinar.webinarId = inDb._id.toString()

  const res = await request(app)
    .put('/api/webinars/')
    .send(updateWebinar)

  expect(res.status).toEqual(200)
  expect(res.body).toEqual(updateWebinar)
  const finalInDb = await Webinar.findById(res.body.webinarId)
  expect(finalInDb).toMatchObject({ ...omit(updateWebinar, 'webinarId') })
})

it('should return a 400 if any of the fields are messed up', async () => {
  const originalWebinar = generate.webinar()
  const inDb = await new Webinar(originalWebinar).save()
  expect(inDb).toMatchObject({ ...omit(originalWebinar, 'webinarId') })

  const updateWebinar = generate.webinar(100, { title: null })
  updateWebinar.webinarId = inDb._id.toString()

  const res = await request(app)
    .put('/api/webinars/')
    .send(updateWebinar)

  expect(res.status).toEqual(400)
  expect(res.body).toEqual({ message: expect.any(String) })
  const finalInDb = await Webinar.findById(inDb._id)
  expect(finalInDb).toMatchObject({ ...omit(originalWebinar, 'webinarId') })
})

it('should return a 404 if not found', async () => {
  const inDb = await Webinar.find()
  expect(inDb).toHaveLength(0)
  const updateWebinar = generate.webinar()

  const res = await request(app)
    .put('/api/webinars/')
    .send(updateWebinar)

  expect(res.status).toEqual(404)
  expect(res.body).toEqual({})
})

/**
 * DELETE
 */
it('should return a 204 if delete was successful', async () => {
  const webinar = generate.webinar()
  const created = await new Webinar(webinar).save()
  const inDb = await Webinar.find()
  expect(inDb).toHaveLength(1)

  const res = await request(app).delete(`/api/webinars/${created._id}`)

  expect(res.status).toEqual(204)
  expect(res.body).toEqual({})
  const finalInDb = await Webinar.find()
  expect(finalInDb).toHaveLength(0)
})

it('should return a 404 if not found', async () => {
  const inDb = await Webinar.find()
  expect(inDb).toHaveLength(0)

  const res = await request(app).delete(`/api/webinars/${generate.objectId()}`)

  expect(res.status).toEqual(404)
  expect(res.body).toEqual({})
})
