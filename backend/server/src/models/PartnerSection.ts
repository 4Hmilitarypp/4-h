import mongoose from 'mongoose'
import slugify from 'slugify'

const partnerSectionSchema = new mongoose.Schema({
  featuredImages: { type: Array, required: 'Please enter a a featured image' },
  shortDescription: { type: String, required: 'Please enter a description' },
  slug: String,
  title: { type: String, required: 'Please enter a title' },
})

partnerSectionSchema.pre('save', async function(next) {
  if (!this.isModified('title')) {
    next()
    return
  }
  ;(<any>this).slug = slugify((<any>this).title)
  next()
})

export default mongoose.model('PartnerSection', partnerSectionSchema)
