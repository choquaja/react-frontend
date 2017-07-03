const path = require('path');
const fs = require('fs');
const isEmpty = require('lodash/isEmpty');
const chalk = require('chalk')

const appDirectory = fs.realpathSync(process.cwd());
const resolvePath = path1 => path2 => path.resolve(path1, path2);
const resolveApp = resolvePath(appDirectory);

const REQUIRED_ENV_VARS = [ 'UI_API_URL' ];
const OPTIONAL_ENV_VARS = [ 'UI_SENTRY_DSN' ];
const addEnvVarToObject = (obj, v) => {
  obj[v] = process.env[v];
  return obj;
}

const paths = {
  appBuild: resolveApp('build'),
  appPublic: resolveApp('public'),
  appHtml: resolveApp('public/index.html'),
  appIndexJs: resolveApp('src/index.js'),
  appPackageJson: resolveApp('package.json'),
  appSrc: resolveApp('src'),
  yarnLockFile: resolveApp('yarn.lock'),
  testsSetup: resolveApp('src/setupTests.js'),
  appNodeModules: resolveApp('node_modules'),
  publicUrl: '/',
};

function getGlobals() {
  const isMissing = REQUIRED_ENV_VARS.some(
    x => isEmpty(process.env[x])
  );

  if (isMissing) {
    console.log()
    console.log(chalk.red('ERROR'))
    console.log('Missing one or more required environment variables:')
    console.log(REQUIRED_ENV_VARS.map(x => `- ${x}`).join('\n'))
    console.log()
    console.log('Please set all of the required environment variables and run the command again.')
    console.log()
    process.exit(1)
  }

  const raw = Object.assign(
    {
      'NODE_ENV': process.env.NODE_ENV || 'development',
      'PUBLIC_URL': paths.publicUrl,
    },
    REQUIRED_ENV_VARS.reduce(addEnvVarToObject, {}),
    OPTIONAL_ENV_VARS.reduce(addEnvVarToObject, {})
  );

  const stringified = {
    'process.env': Object
      .keys(raw)
      .reduce((env, key) => {
        env[key] = JSON.stringify(raw[key]);
        return env;
      }, {}),
  };

  return { raw, stringified };
}

function getEnvironmentFlags(env) {
  return {
    isProd: !!(env.prod || env.production),
    isDev: !!(env.dev || env.development)
  };
}

function setEnvVars() {
  if (!isEmpty(process.env.TRAVIS_BRANCH)) {
    if (process.env.TRAVIS_BRANCH === 'master') {
      process.env.UI_API_URL = process.env.UI_API_URL_STAGING;
    }
  }
}

module.exports = {
  paths,
  getGlobals,
  getEnvironmentFlags,
  setEnvVars
};
