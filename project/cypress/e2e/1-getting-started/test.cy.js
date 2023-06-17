beforeEach("testing", () => {
  cy.visit("https://owasp.org/www-project-juice-shop/");
  cy.contains("OWASP Juice Shop");
});

it("test case 1-open website and change the overview tab link", () => {
  cy.get('.tab-link[id="overview-link"]')
    .click()
    .should("have.class", "tab-link current");
});

it("test case 2-open website and change the news tab link", () => {
  cy.get('a[href="#div-news"]')
    .click()
    .should("have.class", "tab-link current");
});

it("test case 3-click on store link and visit store page", () => {
  cy.viewport(2000, 1200);
  cy.get("#close-banner > .fa").click();
  cy.get('[class="nav-button"]').find("a").eq(0).dblclick();
  cy.wait(10000);
  cy.title("Zazzle");
  cy.url().should("contains", "https://www.zazzle.com/store/owasp_foundation");
});

it("test case 4-click on store link and visit store page", () => {
  cy.viewport(2000, 1200);
  cy.get("#close-banner > .fa").click();
  cy.wait(5000);
  cy.get('a[href="https://github.com/bkimminich/juice-shop/subscription"]')
    .invoke("removeAttr", "target")
    .should("have.attr", "target", "_blank")
    .click();
  cy.window().then((win) => {
    expect(win.top).not.to.equal(win.parent);
  });
});
