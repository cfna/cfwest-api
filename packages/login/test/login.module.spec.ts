import { LoginModule } from "../src"

jest.setTimeout(90000)

describe('LoginModule Test Suite', () => {

    let loginModule: LoginModule

    beforeEach(() => {
        loginModule = new LoginModule({
            captchaToken: process.env["2CAPTCHA_API_KEY"] || "",
            headless: false
        })
    })

    // test('Login should work', async () => {
    //     await loginModule.login({
    //         id: process.env.ACC_ID || "MISSING_ID",
    //         password: process.env.ACC_PASS || "MISSING_PASS"
    //     })
    // })

    test('Module instance can be created', () => {
        expect(loginModule).toBeDefined()
    })

})
