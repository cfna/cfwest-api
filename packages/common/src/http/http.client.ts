import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { Agent } from 'https'

export class HttpClient {
  private readonly httpClient: AxiosInstance

  constructor() {
    this.httpClient = axios.create({
      baseURL: 'http://crossfire.z8games.com/rest',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'en-US,en;q=0.9,de;q=0.8',
        Host: 'crossfire.z8games.com',
        Referer: 'http://crossfire.z8games.com/playerranking.html',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.109 Safari/537.36'
      },
      httpsAgent: new Agent({
        rejectUnauthorized: false
      })
    })
  }

  async get<T>(url: string, options?: AxiosRequestConfig): Promise<T | undefined> {
    const response = await this.httpClient.get<T>(url, options)
    if (response && response.data) {
      return response.data
    }
    return undefined
  }
}
