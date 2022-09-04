/**
 * Interface used to configure [LoginModule].
 */
export interface LoginConfig {
  /**
   * 2Captcha API Key used for reCAPTCHA authentication.
   */
  captchaToken: string

  /**
   * Specify if the browser session should be started headless.
   */
  headless: boolean
}
