import { expect, Locator } from "@playwright/test"

export class CartPageValidations {

  async validateProductData(expected: string, actual: Locator) {
    const actualText = await actual.innerText()
    await expect(actual,
      `"El dato del producto esperado: "${expected}", no coincide con el actual: " ${actualText}`)
      .toHaveText(expected)
  }

}
