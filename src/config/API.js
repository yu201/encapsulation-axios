const serviceModule = {
    getLocation: {
      url: '/api/sys/v1/activity/list',
      method:'get'
    },
    sendDATA: {
        url: '/api/sys/v1/activity/list',
        method:'post'
      }
  }
  const ApiSetting = {...serviceModule }
   
  export default ApiSetting