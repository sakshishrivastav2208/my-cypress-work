import { generateString } from '../../utils/helper';

describe('Forgot password', () => {
  it('forgot pwd link existance and working of link passes and view in different screen sizes', () => {
    cy.fixture('viewPort.json').then((viewPort) => {
      cy.visit(Cypress.env('appUrl'));
      cy.get('a').filter('[href*="/forgot-password"]').click();
      cy.viewport(viewPort.commonMobileViewWidth, viewPort.commonMobileViewWidth);
      cy.viewport(viewPort.commonTabletViewWidth, viewPort.commonTabletViewHeight);
      cy.viewport(viewPort.commonDesktopViewWidth, viewPort.commonDesktopViewHeight);
    });
  });

  it('forgot pwd with blank username field', () => {
    cy.visit(Cypress.env('appUrl'));
    cy.get('a').filter('[href*="/forgot-password"]', { timeout: Infinity }).click();
    cy.contains('Forgot your password').should('be.visible');
    cy.get('button').click();
    cy.contains('Username is required');
  });

  it('forgot pwd with valid username', () => {
    cy.visit(Cypress.env('appUrl'));
    cy.get('a').filter('[href*="/forgot-password"]').click();
    cy.contains('Forgot your password').should('be.visible');
    cy.get('[aria-label="Username"]').type(Cypress.env('username'));
    cy.get('button').click();
    cy.contains('We have sent email to your registered email to reset the password.');
  });

  it('forgot pwd with invalid username', () => {
    cy.visit(Cypress.env('appUrl'));
    cy.get('a').filter('[href*="/forgot-password"]').click();
    cy.contains('Forgot your password').should('be.visible');
    cy.get('[aria-label="Username"]').type(generateString(5));
    cy.get('button').click();
    cy.contains('We have sent email to your registered email to reset the password.');
  });

  it('sign up link existance and working of link passes', () => {
    cy.visit(Cypress.env('appUrl'));
    cy.get('a').filter('[href*="/forgot-password"]').click();
    cy.contains('Forgot your password').should('be.visible');
    cy.get('a').filter('[href*="/signup"]').click();
    cy.contains('Sign in').should('be.visible');
  });
});
