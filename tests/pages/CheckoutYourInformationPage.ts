import { Page, Locator } from "@playwright/test"

export class CheckoutYourInformationPage {

  readonly page: Page
  readonly titleYourInformation: Locator
  readonly firstNameInput: Locator
  readonly lastNameInput: Locator
  readonly postalCodeInput: Locator
  readonly messageError: Locator;
  readonly continueButton: Locator
  readonly cancelButton: Locator

  constructor(page: Page) {
    this.page = page
    this.titleYourInformation = page.locator('span[data-test="title"]')
    this.firstNameInput = page.getByRole('textbox', { name: 'First Name' })
    this.lastNameInput = page.getByRole('textbox', { name: 'Last Name' })
    this.postalCodeInput = page.getByRole('textbox', { name: 'Zip/Postal Code' })
    this.messageError = page.locator('h3[data-test="error"]')
    this.continueButton = page.getByRole('button', { name: 'Continue' })
    this.cancelButton = page.getByRole('button', { name: 'Go back Cancel' })
  }
}
