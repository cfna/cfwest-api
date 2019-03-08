import puppeteer from 'puppeteer';

const idSelector = '#login-page-userid';
const pwSelector = '#login-page-password';
const submitButtonSelector = '#login-button';

export async function performLogin(id: string, pw: string, opts?: any): Promise<puppeteer.Cookie[]> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.z8games.com/login.html', { waitUntil: 'networkidle2' });
    console.log(`Logging in as: ${id}`);
    await page.click(idSelector);
    await page.keyboard.type(`${id}`);
    await page.click(pwSelector);
    await page.keyboard.type(`${pw}`);
    await page.waitForSelector(submitButtonSelector);
    await page.click(submitButtonSelector);

    console.log('Login should be completed now...');
    const cookies = await page.cookies();
    cookies.map((item: puppeteer.Cookie) => {
        console.log(`[Cookie] ${item.domain} - ${item.name} - ${item.value}`);
    });
    await page.close();
    return cookies;
}
