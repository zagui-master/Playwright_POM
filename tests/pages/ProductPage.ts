import { Page, Locator } from "@playwright/test"

export class ProductPage {

  readonly page: Page
  readonly titleProducts: Locator
  readonly selectFilter: Locator
  readonly cardProduct: Locator

  constructor(page: Page) {
    this.page = page
    this.titleProducts = page.locator('div[data-test="title"]')
    this.selectFilter = page.locator('select[data-test= "product-sort-container"]')
    this.cardProduct = page.locator('div[data-test="inventory-item"]')
  }
}
