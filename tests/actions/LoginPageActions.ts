import { Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

export class LoginPageActions {

  readonly page: Page
  readonly loginPage: LoginPage

  constructor(page: Page) {
    this.loginPage = new LoginPage(page)
  }

  async enterUser(user: string) {
    await this.loginPage.usernameInput.fill(user)
  }

  async enterPassword(password: string) {
    await this.loginPage.passwordInput.fill(password)
  }

  async clickLoginButton() {
    await this.loginPage.loginButton.click()

  }

  async login(user: string, password: string) {
    await this.loginPage.usernameInput.fill(user)
    await this.loginPage.passwordInput.fill(password)
    await this.loginPage.loginButton.click()
  }

}
