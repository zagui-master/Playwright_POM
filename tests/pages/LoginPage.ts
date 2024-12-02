import { Page, Locator } from "@playwright/test";

export class LoginPage {

  readonly page: Page
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly messageError: Locator;

  constructor(page: Page) {
    this.page = page
    this.usernameInput = page.getByRole('textbox', { name: 'Username' })
    this.passwordInput = page.getByRole('textbox', { name: 'Password' })
    this.loginButton = page.getByRole('button', { name: 'Login' })
    this.messageError = page.locator('h3[data-test="error"]')
  }
}
