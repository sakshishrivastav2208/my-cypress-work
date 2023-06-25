it("use of navigation of browser-validation with title and headings", () => {
  cy.visit("https://demo.opencart.com/");
  cy.title().should("eq", "Your Store");
  cy.get(":nth-child(7) > .nav-link").click();
  cy.get("h2").should("have.text", "Cameras");
  cy.reload();
  cy.go("back");
  cy.title().should("eq", "Your Store");
  cy.reload();
  cy.go("forward");
  cy.get("h2").should("have.text", "Cameras");
  cy.reload();
});

it("use of navigation of browser-validations with url", () => {
  cy.visit("https://www.qaclickacademy.com/");
  cy.title().should(
    "eq",
    "QAClick Academy - A Testing Academy to Learn, Earn and Shine"
  );
  cy.get(".navbar-nav > :nth-child(4) > a").click();
  cy.reload();
  cy.url().should("includes", "/about.html");
  cy.go("back"); //navigation through browser
  cy.reload();
  cy.url().should("includes", "https://www.qaclickacademy.com/");
  cy.go("forward");
  cy.reload();
  cy.location("pathname").should("include", "/about.html");
});
