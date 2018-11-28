import mongoose from 'mongoose'

const partnerSchema = new mongoose.Schema({
  annualReports: { type: Array },
  featuredImages: { type: Array, required: 'Please enter a a featured image' },
  images: { type: Array },
  links: { type: Array },
  longDescription: { type: String, required: 'Please enter a long description' },
  shortDescription: { type: String, required: 'Please enter a short description' },
  slug: String,
  title: { type: String, required: 'Please enter a title' },
})

export default mongoose.model('Partner', partnerSchema)
