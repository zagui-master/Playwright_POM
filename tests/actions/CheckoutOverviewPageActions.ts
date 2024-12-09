import { Page } from "@playwright/test"
import { CheckoutOverviewPage } from "../pages/CheckoutOverviewPage"

export class CheckoutOverviewPageActions {
  readonly page: Page
  readonly checkoutOverviewPage: CheckoutOverviewPage

  constructor(page: Page) {
    this.checkoutOverviewPage = new CheckoutOverviewPage(page)
  }

  async clickFinishButton() {
    await this.checkoutOverviewPage.finishButton.click()
  }

}
