module.exports = {
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.json',
    },
  },
  preset: 'ts-jest',
  moduleFileExtensions: ['js', 'ts'],
  testMatch: ['**/__tests__/**/*.(ts)'],
  testEnvironment: './jestSetup/mongoEnvironment.js',
  globalSetup: './jestSetup/setup.js',
  globalTeardown: './jestSetup/teardown.js',
  setupTestFrameworkScriptFile: './jestSetup/mongoose.js',

  coverageReporters: ['text', 'html'],
  collectCoverageFrom: ['src/**/*.ts', '!src/types.ts', '!src/sharedTypes.ts'],
}
