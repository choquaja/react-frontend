process.env.NODE_ENV = 'test';

const jest = require('jest');
let argv = process.argv.slice(2);

// Watch unless on CI or in coverage mode
if (!process.env.CI && argv.indexOf('--coverage') < 0 && argv.indexOf('--nowatch') < 0) {
  argv.push('--watch');
}

argv = argv.filter(flag => flag !== '--nowatch')

jest.run(argv);
