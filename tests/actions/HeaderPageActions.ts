import { Page } from "@playwright/test";
import { HeaderPage } from "../pages/HeaderPage"


export class HeaderPageActions {

  readonly page: Page
  readonly headerPage: HeaderPage

  constructor(page: Page) {
    this.page = page
    this.headerPage = new HeaderPage(page)
  }

  async clickOnShoppingCartIcon() {
    await this.headerPage.shoppingCartIcon.click()
  }
}
