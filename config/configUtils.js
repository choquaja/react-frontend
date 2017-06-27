const path = require('path');
const fs = require('fs');
const isEmpty = require('lodash/isEmpty');

const appDirectory = fs.realpathSync(process.cwd());
const resolvePath = path1 => path2 => path.resolve(path1, path2);
const resolveApp = resolvePath(appDirectory);

const REQUIRED_ENV_VARS = [ 'API_URL' ];

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
    throw new Error(`Missing one or more environment variables: ${required.join(',')}`)
  }

  const raw = {
    'NODE_ENV': process.env.NODE_ENV || 'development',
    'PUBLIC_URL': paths.publicUrl,
    'API_URL': process.env.API_URL,
  };

  const stringified = {
    'process.env': Object
      .keys(raw)
      .reduce((env, key) => {
        env[key] = JSON.stringify(raw[key]);
        return env;
      }, {}),
    '__API_URL__': JSON.stringify(raw.API_URL)
  };

  return { raw, stringified };
}

function getEnvironmentFlags(env) {
  return {
    isProd: !!(env.prod || env.production),
    isDev: !!(env.dev || env.development)
  };
}

module.exports = {
  paths,
  getGlobals,
  getEnvironmentFlags
};
