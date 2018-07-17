module.exports = {
  pluginOptions: {
    s3Deploy: {
      assetPath: 'dist',
      bucket: 'anthembunker.com',
      region: 'us-east-2',
      pwa: true,
      pwaFiles: 'service-worker.js',
      enableCloudfront: true,
      cloudfrontId: 'E35IVOZ5VFRHIN',
      cloudfrontMatchers: '/*',
      uploadConcurrency: 5
    }
  }
}