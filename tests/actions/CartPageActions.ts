import { Page } from "@playwright/test"
import { CartPage } from "../pages/CartPage"

export class CartPageActions {

  readonly page: Page
  readonly cartPage: CartPage

  constructor(page: Page) {
    this.cartPage = new CartPage(page)
  }

  async clickCheckOutButton() {
    await this.cartPage.checkoutButton.click()
  }

}
