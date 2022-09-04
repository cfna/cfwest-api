import { LoginModule } from "../src"

describe('LoginModule Test Suite', () => {

    let loginModule: LoginModule

    beforeEach(() => {
        loginModule = new LoginModule({
            captchaToken: process.env["2CAPTCHA_API_KEY"] || ""
        })
    })

    // test('Login should work', async () => {
    //     await loginModule.login({
    //         id: process.env.ACC_CREDS || "",
    //         password: process.env.ACC_CREDS || ""
    //     })
    // })

    test('Module instance can be created', () => {
        expect(loginModule).toBeDefined()
    })

})
