import mongoose from 'mongoose'

// @ts-ignore: validate causing whole schema to error
const webinarSchema = new mongoose.Schema({
  category: {
    required: 'category is required',
    type: String,
  },
  description: {
    required: 'description is required',
    type: String,
  },
  title: {
    required: 'title is required',
    type: String,
  },
  url: {
    required: 'url is required',
    type: String,
  },
})

export default mongoose.model('Webinar', webinarSchema)
