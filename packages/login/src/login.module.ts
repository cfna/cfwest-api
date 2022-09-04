import { default as puppeteer } from 'puppeteer-extra'
import { default as RecaptchaPlugin } from 'puppeteer-extra-plugin-recaptcha'
import { LoginConfig } from './login.config'
import { LoginCredentials } from './login.credentials'

const Z8GAMES_LOGIN_URL = 'https://www.z8games.com/login.html'
const USERNAME_INPUT_FIELD_ID = 'login-page-userid'
const PASSWORD_INPUT_FIELD_ID = 'login-page-password'
const CAPTCHA_FIELD_ID = ''
const LOGIN_BUTTON_ID = 'login-button'

export class LoginModule {

    constructor(config: LoginConfig) {
        puppeteer.use(RecaptchaPlugin({
            provider: {
                id: '2captcha',
                token: config.captchaToken
            }
        }))
    }

    async login(credentials: LoginCredentials) {
        const browser = await puppeteer.launch({ headless: true })
        const page = await browser.newPage()

        await page.goto(Z8GAMES_LOGIN_URL)

        await page.solveRecaptchas()
        await page.waitForNavigation()

        await page.click(USERNAME_INPUT_FIELD_ID)
        await page.type(USERNAME_INPUT_FIELD_ID, credentials.id)
        await page.type(PASSWORD_INPUT_FIELD_ID, credentials.password)
        await page.click(LOGIN_BUTTON_ID)

        await page.screenshot({
            path: 'response.png',
            fullPage: true
        })
    }

}