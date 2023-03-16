const expect = require('chai').expect

import { LoginPage }  from '../support/helpers/loginPage'

describe('Login - Test suite', () => {

    const loginPage = new LoginPage()

    beforeEach(() => loginPage.navigate())

    it('standard user login', () => {
        loginPage.login(loginPage.standardUser, loginPage.correctPassword)
        cy.url().should('equal', loginPage.inventoryUrl)
    })

    it('locked out user login', () => {
        loginPage.login(loginPage.lockedOutUser, loginPage.correctPassword)
        loginPage.errorMessage.should('include.text', loginPage.errorMsgLockedOut)
    })

    it('wrong user login', () => {
        loginPage.login(loginPage.incorrectUser, loginPage.correctPassword)
        loginPage.errorMessage.should('include.text', loginPage.errorMsgDontMatch)
    })

    it('wrong password login', () => {
        loginPage.login(loginPage.standardUser, loginPage.incorrectPassword)
        loginPage.errorMessage.should('include.text', loginPage.errorMsgDontMatch)
    })

})