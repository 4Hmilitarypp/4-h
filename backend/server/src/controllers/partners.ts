import mongoose from 'mongoose'
import { Controller } from '../types'

const Partner = mongoose.model('Partner')

export const createPartner: Controller = async (req, res) => {
  const partner = new Partner(req.body)
  const newPartner = await partner.save()

  return res.json({ partner: newPartner })
}

export const getPartners: Controller = async (req, res) => {
  const partners = await Partner.find({})
  return res.json({ partners })
}

export const updatePartner: Controller = async (req, res) => {
  const { id, ...updates } = req.body
  const newPartner = await Partner.findOneAndUpdate({ _id: id }, updates)
  if (newPartner) {
    return res.json(newPartner)
  }
  return res.status(404).send()
}

export const deletePartner: Controller = async (req, res) => {
  const deletedPartner = await Partner.findByIdAndDelete(req.params.id)
  if (deletedPartner) {
    return res.status(204).send()
  }
  return res.status(404).send()
}
