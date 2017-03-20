const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());
const resolvePath = path1 => path2 => path.resolve(path1, path2);
const resolveApp = resolvePath(appDirectory);

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
  const raw = {
    'NODE_ENV': process.env.NODE_ENV || 'development',
    'PUBLIC_URL': paths.publicUrl
  };

  const stringified = {
    'process.env': Object
      .keys(raw)
      .reduce((env, key) => {
        env[key] = JSON.stringify(raw[key]);
        return env;
      }, {})
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
