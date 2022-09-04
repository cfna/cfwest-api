# `@cfwest/login` - LoginModule

> This package is used to authenticate against Z8Games/CrossFire West Services.

## Preparation

In order for the project to run without issues you need to specify some environment variables inside a `.env` file.  
The `.env` file needs to be located at the same level as this `README.md` is.  
Use the below sample for reference:

```
2CAPTCHA_API_KEY={2CAPTCHA API KEY}
ACC_ID={YOUR ACCOUNT ID}
ACC_PASS={YOUR ACCOUNT PASSWORD}
```

This module uses [2captcha](https://2captcha.com) to bypass Z8Games reCAPTCHA. 2Captcha is a paid service.  

## Building

To build the project run `npm run build`  

## Testing

To execute the tests run `npm run test`