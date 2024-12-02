import { Page } from "@playwright/test"
export class BrowserLauncher {

  readonly page: Page;
  readonly defaultUrl;

  constructor(page: Page) {
    this.page = page
    this.defaultUrl = process.env.BASE_URL
  }

  async navigateTo(url?: string) {
    const destinationUrl = url ?? this.defaultUrl
    if (!destinationUrl) {
      throw new Error("No se ha definido una URL por defecto en el archivo .env ni se ha proporcionado una URL como parámetro.");
    }
    await this.page.goto(destinationUrl)
  }

  async teardown() {
    await this.page.close()
  }

}
