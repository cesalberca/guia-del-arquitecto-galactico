module.exports = {
  preset: 'ts-jest',
  setupFiles: ['./test/setup.ts'],
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'text-summary'],
}
