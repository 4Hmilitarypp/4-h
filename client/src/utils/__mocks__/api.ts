const mock = { reset: undefined, auth: undefined, liaisons: undefined }
const authResponse = { user: { _id: 1 } }
function reset() {
  Object.assign(mock, {
    auth: Object.assign(mock.auth || {}, {
      login: jest.fn(() => Promise.resolve(authResponse)),
      logout: jest.fn(() => Promise.resolve(authResponse)),
      me: jest.fn(() => Promise.resolve(authResponse)),
      register: jest.fn(() => Promise.resolve(authResponse)),
    }),
    liaisons: Object.assign(mock.liaisons || {}, {
      get: jest.fn(() => Promise.resolve({ liaisons: {} })),
    }),
    reset,
  })
}
reset()

export default mock

// module.exports = {
//   default: mock,
// }
