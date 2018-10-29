const mock = { reset: undefined, auth: undefined }
const authResponse = { user: { _id: 1 } }
function reset() {
  Object.assign(mock, {
    auth: Object.assign(mock.auth || {}, {
      login: jest.fn(() => Promise.resolve(authResponse)),
      logout: jest.fn(() => Promise.resolve(authResponse)),
      me: jest.fn(() => Promise.resolve(authResponse)),
      register: jest.fn(() => Promise.resolve(authResponse)),
    }),
    reset,
  })
}
reset()

module.exports = {
  default: mock,
}
