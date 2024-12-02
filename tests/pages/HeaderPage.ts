import { Page, Locator } from "@playwright/test"

export class HeaderPage {
  
  readonly page: Page
  readonly burgerMenu: Locator
  readonly closeMenuButton: Locator
  readonly menuOptionAllItems: Locator
  readonly menuOptionAbout: Locator
  readonly menuOptionLogout: Locator
  readonly menuOptionResetAppState: Locator
  readonly titleSwagLabs: Locator
  readonly shoppingCartButton: Locator

  constructor(page: Page) {
    this.page = page
    this.burgerMenu = page.getByRole('button', { name: 'Open Menu' })
    this.closeMenuButton = page.getByRole('button', { name: 'Close Menu' })
    this.menuOptionAllItems = page.getByRole('link', { name: 'All Items' })
    this.menuOptionAbout = page.getByRole('link', { name: 'About' })
    this.menuOptionLogout = page.getByRole('link', { name: 'Logout' })
    this.menuOptionResetAppState = page.getByRole('link', { name: 'Reset App State' })
    this.titleSwagLabs = page.locator('div[class="app_logo"]')
    this.shoppingCartButton = page.locator('div[data-test="shopping-cart-link"]')
  }
}
