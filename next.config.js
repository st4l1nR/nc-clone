module.exports = (phase, { defaultConfig }) => {
    return {
      ...defaultConfig,
  
      webpack: (config) => {
        config.resolve = {
          ...config.resolve,
          fallback: {
            "fs": false,
            "path": false,
            "os": false,
            "child_process":false,
            "net":false
          }
        }
        return config
      },
    }
  }