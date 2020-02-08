import * as chromium from "chrome-aws-lambda";
import { Request, Response } from "express";

export const finalPrice = async (request: Request, response: Response) => {
  let result = null;
  let browser = null;

  try {
    browser = await chromium.puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: true
    });

    let page = await browser.newPage();

    await page.goto(request.body.url || "https://google.com");

    result = await page.title();
    console.log(result);
    response.send(result);
  } catch (error) {
    console.log(error);
    response.status(500).send(error);
  } finally {
    if (browser !== null) {
      await browser.close();
    }
  }
};
