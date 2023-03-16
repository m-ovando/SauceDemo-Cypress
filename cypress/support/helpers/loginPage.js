/// <reference types="cypress" />

export class LoginPage {

    //General variables

    baseUrl = "https://www.saucedemo.com/";
    inventoryUrl = this.baseUrl + "inventory.html";

    standardUser = "standard_user";
    lockedOutUser = "locked_out_user";
    incorrectUser = "invalid_user";

    correctPassword = "secret_sauce";
    incorrectPassword = "secret";

    errorMsgLockedOut = "locked out";
    errorMsgDontMatch = "do not match";

    //General functions

    navigate() {
        cy.visit(this.baseUrl)
    }
  
    get userInput() {
      return cy.get('input#user-name')
    }
  
    get passwordInput() {
      return cy.get('input#password')
    }
  
    get loginButton() {
      return cy.get('[data-test=login-button]')
    }

    get errorMessage(){
        return cy.get('h3[data-test=error]')
    }

    login(username, password) {
      this.userInput.type(username)
      this.passwordInput.type(password)
      this.loginButton.click()
    }
}