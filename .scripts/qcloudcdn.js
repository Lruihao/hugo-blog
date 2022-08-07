/**
 * Refresh Qcloud CDN cache
 * @command `SECRET_ID=<secretId> SECRET_KEY=<secretKey> npm run qcloudcdn` 
 */
const qcloudSDK = require('qcloud-cdn-node-sdk');

// Get the config from https://console.qcloud.com/capi
qcloudSDK.config({
  secretId: process.argv[2],
  secretKey: process.argv[3]
})

qcloudSDK.request('RefreshCdnDir', {
  // See https://cloud.tencent.com/document/api/228/3947
	'dirs.0': 'https://lruihao.cn/'
}, (res) => {
  res.code && console.log(res)
})