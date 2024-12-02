import { Page, Locator } from "@playwright/test"

export class CheckoutCompletePage {

  readonly page: Page
  readonly titleComplete: Locator
  readonly messageThankYouForYourOder: Locator
  readonly messageYourOrderHasBeenDespatched: Locator
  readonly backHomeButton: Locator

  constructor(page: Page) {
    this.page = page
    this.titleComplete = page.locator('span[data-test="title"]')
    this.messageThankYouForYourOder = page.locator('h2[data-test="complete-header"]')
    this.messageYourOrderHasBeenDespatched = page.locator('div[data-test="complete-text"]')
    this.backHomeButton = page.getByRole('button', { name: 'Back Home' })
  }
}
