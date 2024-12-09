import { Page } from "@playwright/test";
import { CheckoutYourInformationPage } from "../pages/CheckoutYourInformationPage"

export class CheckoutYourInformationPageActions {

  readonly page: Page
  readonly checkoutYourInformationPage: CheckoutYourInformationPage

  constructor(page: Page) {
    this.checkoutYourInformationPage = new CheckoutYourInformationPage(page)
  }

  async enterFirstName(firstName: string) {
    await this.checkoutYourInformationPage.firstNameInput.fill(firstName)
  }

  async enterLastName(lastName: string) {
    await this.checkoutYourInformationPage.lastNameInput.fill(lastName)
  }

  async enterPostalCode(postalCode: string) {
    await this.checkoutYourInformationPage.postalCodeInput.fill(postalCode)
  }

  async clickContinueButton() {
    await this.checkoutYourInformationPage.continueButton.click()
  }

  async checkoutYourInformation(firstName: string, lastName: string, postalCode: string) {
    await this.checkoutYourInformationPage.firstNameInput.fill(firstName)
    await this.checkoutYourInformationPage.lastNameInput.fill(lastName)
    await this.checkoutYourInformationPage.postalCodeInput.fill(postalCode)
    await this.checkoutYourInformationPage.continueButton.click()
  }

}
