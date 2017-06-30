module.exports = {
  // Only collect coverage against source files
  collectCoverageFrom: [
    'src/**/*.js',
  ],
  coverageReporters: [
    'json',
    'lcov',
  ],
  // Global setup before tests
  setupFiles: [
    '<rootDir>/config/jest/globals.js',
  ],
  // Serializer for enzyme
  snapshotSerializers: [
    '<rootDir>/node_modules/enzyme-to-json/serializer',
  ],
  // Pattern of files to ignore
  testPathIgnorePatterns: [
    '<rootDir>[/\\\\](build|node_modules)[/\\\\]',
  ],
  testEnvironment: 'node',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^(?!.*\\.(js|jsx|css|json)$)': '<rootDir>/config/jest/fileTransform.js',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$',
  ],
  // Glob pattern for test files
  testMatch: [
    '**/__tests__/**/*.spec.js',
  ],
};
