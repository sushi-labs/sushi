import { version } from '../package.json'
import { config } from './config.js'

export const request = async <T = Response>(
  url: RequestInfo | URL,
  options: RequestInit = {},
): Promise<T> => {
  const { userId, integrator, apiKey } = config.get()

  if (!integrator) {
    throw new Error(
      "'You need to provide the Integrator property. Please see documentation https://docs.sushi.com/sdk/getting-started#create-config",
    )
  }

  try {
    const headers: HeadersInit = {}

    if (apiKey) headers['x-sushi-api-key'] = apiKey
    if (userId) headers['x-sushi-userid'] = userId
    if (version) headers['x-sushi-sdk'] = version
    if (integrator) headers['x-sushi-integrator'] = integrator

    options.headers = headers

    const response: Response = await fetch(url, options)

    if (!response.ok) {
      //
    }

    return response.json()
  } catch (error) {
    console.error(error)
    throw error
  }
}
