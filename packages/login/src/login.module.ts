import { LoginCookie } from './login.cookie'
import { devices } from 'puppeteer'
import { default as puppeteer } from 'puppeteer-extra'
import { default as RecaptchaPlugin } from 'puppeteer-extra-plugin-recaptcha'
import { LoginConfig } from './login.config'
import { LoginCookieMapper } from './login-cookie.mapper'
import { LoginCredentials } from './login.credentials'

const Z8GAMES_LOGIN_URL = 'https://www.z8games.com/login.html'
const USERNAME_INPUT_FIELD_ID = '#login-page-userid'
const PASSWORD_INPUT_FIELD_ID = '#login-page-password'
const LOGIN_BUTTON_ID = '#login-button'

const Pixel5 = devices['Pixel 5']

/**
 * The LoginModule is used to get [LoginCookie]s which can be used for authenticated requests.
 */
export class LoginModule {
  private readonly config: LoginConfig

  /**
   * Create a new [LoginModule] instance. Use the `config` options to configure the module.
   * @param config The [LoginConfig] options to use.
   */
  constructor(config: LoginConfig) {
    puppeteer.use(
      RecaptchaPlugin({
        provider: {
          id: '2captcha',
          token: config.captchaToken
        }
      })
    )
    this.config = config
  }

  /**
   * Authenticate with an Z8Games Account. Use the returned [LoginCookie] for authenticated requests.
   * @param credentials - Account credentials
   * @returns [LoginCookie] Array of login cookies. Returns undefined in case of error/timeout
   */
  async authenticate(credentials: LoginCredentials): Promise<LoginCookie[] | undefined> {
    const browser = await puppeteer.launch({ headless: this.config.headless })
    const page = await browser.newPage()

    await page.emulate(Pixel5)
    await page.goto(Z8GAMES_LOGIN_URL, { waitUntil: 'networkidle2' })

    await page.waitForSelector(LOGIN_BUTTON_ID)

    await page.type(USERNAME_INPUT_FIELD_ID, credentials.id)
    await page.type(PASSWORD_INPUT_FIELD_ID, credentials.password)

    // await page.solveRecaptchas()

    await page.click(LOGIN_BUTTON_ID)
    await page.waitForNavigation()

    await page.screenshot({
      path: 'debug.png',
      fullPage: true
    })

    const cookies = await page.cookies()
    cookies.forEach((cookie) => {
      console.log(`Cookie: ${JSON.stringify(cookie)}`)
    })

    await page.close()
    await browser.close()

    return LoginCookieMapper.mapToLoginCookies(cookies)
  }
}
