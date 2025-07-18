export interface SDKConfig {
  apiKey?: string
  apiUrl: string
  integrator: string
  userId?: string
}

export const config = (() => {
  const _config: SDKConfig = {
    integrator: 'sushi-sdk',
    apiUrl: 'https://api.sushi.com',
  }
  return {
    get() {
      return _config
    },
    set(options: SDKConfig) {
      const { ...otherOptions } = options
      Object.assign(_config, otherOptions)
      return _config
    },
  }
})()
