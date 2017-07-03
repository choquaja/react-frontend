require('dotenv').config({silent: true});
const s3 = require('s3');
const isEmpty = require('lodash/isEmpty')
const {
  AWS_ACCESS_KEY_ID,
  // AWS_BUCKET_PROD,
  AWS_BUCKET_STAGING,
  AWS_SECRET_ACCESS_KEY,
  TRAVIS_BRANCH,
  TRAVIS_PULL_REQUEST,
} = process.env;

// Bail for pull requests
// if (!isEmpty(TRAVIS_PULL_REQUEST)) process.exit()

let bucketName;
if (TRAVIS_BRANCH === 'master') {
  bucketName = AWS_BUCKET_STAGING;
} else {
  console.log('No bucket provided for this branch. Exiting...');
  process.exit();
}

const client = s3.createClient({
  s3Options: {
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
    sslEnabled: true
  },
});

const params = {
  localDir: 'build',
  deleteRemoved: true,
  s3Params: {
    Bucket: bucketName,
    ACL: 'public-read'
  },
  getS3Params (localFile, stat, callback) {
    let s3Params = {};
    if (stat.path === 'index.html') {
      // 60 second cache time for index.html
      s3Params['CacheControl'] = 'max-age=60';
    }
    callback(null, s3Params);
  }
};

const uploader = client.uploadDir(params);
console.log('Upload process started.');

uploader.on('error', function(err) {
  console.error('Could not complete. Error during upload:', err.stack);
  process.exit(1);
});

uploader.on('fileUploadStart', (localPath, s3Path) => {
  console.log(`Started ${localPath} > ${s3Path}`);
});

uploader.on('fileUploadEnd', (localPath, s3Path) => {
  console.log(`Finished ${localPath} > ${s3Path}`);
});

uploader.on('end', function() {
  console.log('Upload process complete.');
});
