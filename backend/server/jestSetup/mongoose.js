const mongoose = require('mongoose')

// Load models since we will not be instantiating our express server.
require('../dist/models/Liaison')
require('../dist/models/Partner')
require('../dist/models/PartnerSection')
require('../dist/models/Webinar')

mongoose.Promise = Promise

const mongooseOpts = {
  autoReconnect: true,
  reconnectInterval: 1000,
  reconnectTries: Number.MAX_VALUE,
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
}

const connectToDb = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URL + process.env.TEST_SUITE,
      mongooseOpts
    )
  } catch (e) {
    console.error(e)
  }
}

beforeEach(async () => {
  if (mongoose.connection.readyState === 0) {
    await connectToDb()
  }

  // make sure it's clean!
  await mongoose.connection.db.dropDatabase()
})

afterEach(async () => {
  await mongoose.disconnect()
})
