import { LoginCookie } from "login.cookie"
import { Protocol } from "puppeteer"

export class LoginCookieMapper {
    static mapToLoginCookies(cookies: Protocol.Network.Cookie[]): LoginCookie[] {
        return cookies.map(this.mapToLoginCookie)
    }

    private static mapToLoginCookie(cookie: Protocol.Network.Cookie): LoginCookie {
        return {
            domain: cookie.domain,
            expires: cookie.expires,
            name: cookie.name,
            path: cookie.path,
            value: cookie.value
        }
    }
}