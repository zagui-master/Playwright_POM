import { Page, Locator } from "@playwright/test"

export class ProductPage {

  readonly page: Page
  readonly titlePageProducts: Locator
  readonly selectFilter: Locator
  readonly cardProduct: Locator
  readonly productName: Locator
  readonly productDescription: Locator
  readonly productPrice: Locator
  readonly addToCartButton: Locator

  constructor(page: Page) {
    this.page = page
    this.titlePageProducts = page.locator('div[data-test="title"]')
    this.selectFilter = page.locator('select[data-test= "product-sort-container"]')
    this.cardProduct = page.locator('div[data-test="inventory-item"]')
    this.productName = page.locator('div[data-test="inventory-item-name"]')
    this.productDescription = page.locator('div[data-test="inventory-item-desc"]')
    this.productPrice = page.locator('div[data-test="inventory-item-price"]')
    this.addToCartButton = page.getByRole('button', { name: 'Add to cart' })
  }
}
