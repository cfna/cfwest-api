import config from '../../jest.config.json'

export default {
  ...config,
  setupFiles: ['dotenv/config']
}
