import { Page, Locator } from "@playwright/test"

export class CartPage {

  readonly page: Page
  readonly titleYourCart: Locator
  readonly cardProductAdded: Locator
  readonly continueShoppingButton: Locator
  readonly checkoutButton: Locator

  constructor(page: Page) {
    this.page = page
    this.titleYourCart = page.locator('span[data-test="title"]')
    this.cardProductAdded = page.locator('div[data-test="inventory-item"]')
    this.continueShoppingButton = page.getByRole('button', { name: 'Go back Continue Shopping' })
    this.checkoutButton = page.getByRole('button', { name: 'Checkout' })
  }
}
