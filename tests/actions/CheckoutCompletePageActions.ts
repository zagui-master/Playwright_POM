import { Page } from "@playwright/test"
import { CheckoutCompletePage } from "../pages/CheckoutCompletePage"

export class CheckoutCompletePageActions {

  readonly page: Page
  readonly checkoutCompletePage: CheckoutCompletePage

  constructor(page: Page) {
    this.checkoutCompletePage = new CheckoutCompletePage(page)
  }

  async clickBackHomeButton() {
    await this.checkoutCompletePage.backHomeButton.click()
  }

}
