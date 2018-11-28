import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'
import validator from 'validator'
// @ts-ignore: validate causing whole schema to error
const liaisonSchema = new mongoose.Schema({
  abbreviation: {
    trim: true,
    type: String,
    unique: true,
  },
  email: {
    trim: true,
    type: String,
    validate: [validator.isEmail, 'Invalid Email Address'],
  },
  image: {
    required: 'Please enter an image url',
    type: String,
  },
  name: String,
  phoneNumber: { type: String, validate: [validator.isMobilePhone, 'Invalid Phone Number'] },
  region: { type: String, required: 'Please Enter a region' },
})

liaisonSchema.plugin(uniqueValidator)

export default mongoose.model('Liaison', liaisonSchema)
