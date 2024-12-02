import { Page, Locator } from "@playwright/test"

export class CheckoutOverviewPage {

  readonly page: Page
  readonly titleOverview: Locator
  readonly cardProductAdded: Locator
  readonly cardSummaryInfo: Locator
  readonly finishButton: Locator
  readonly cancelButton: Locator

  constructor(page: Page) {
    this.page = page
    this.titleOverview = page.locator('span[data-test="title"]')
    this.cardProductAdded = page.locator('div[data-test="inventory-item"]')
    this.cardSummaryInfo = page.locator('div[data-test="inventory-item"]')
    this.finishButton = page.getByRole('button', { name: 'Finish' })
    this.cancelButton = page.getByRole('button', { name: 'Go back Cancel' })
  }
}
