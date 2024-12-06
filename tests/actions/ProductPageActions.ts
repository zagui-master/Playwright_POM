import { Page } from "@playwright/test";
import { ProductPage } from "../pages/ProductPage";
import { HeaderPage } from "../pages/HeaderPage"


export class ProductPageActions {

  readonly page: Page;
  readonly productPage: ProductPage
  readonly headerPage: HeaderPage
  productName: string
  productDescription: string
  productPrice: string


  constructor(page: Page) {
    this.page = page
    this.productPage = new ProductPage(page)
    this.headerPage = new HeaderPage(page)
  }

  private async getProducts() {
    return await this.productPage.cardProduct.all()
  }

  private async randomNumber() {
    let products = await this.getProducts()
    let randomNumber = Math.floor(Math.random() * products.length)
    return randomNumber;
  }

  async selectRandomProduct() {
    let products = await this.getProducts()
    let randomNumber = await this.randomNumber()
    let product = products[randomNumber]
    this.productName = await product.locator(this.productPage.productName).innerText()
    this.productDescription = await product.locator(this.productPage.productDescription).innerText()
    this.productPrice = await product.locator(this.productPage.productPrice).innerText()
    await product.locator(this.productPage.addToCartButton).click()
  }

  async clickOnShoppingCartIcon() {
    await this.headerPage.shoppingCartIcon.click()
  }

}
