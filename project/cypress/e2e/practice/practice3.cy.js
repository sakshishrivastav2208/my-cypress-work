//testing php travels website through cypress

it("visiting fetching data", () => {
  cy.viewport("macbook-16");
  cy.visit("https://phptravels.com/");
  cy.get('a[href="https://phptravels.com/demo"]').parent(".nav-item").click();
  cy.url("https://phptravels.com/demo");
  // cy.get("h4")
  //   .eq("1")
  //   .invoke("val")
  //   .then((value) => {
  //     cy.log(value);
  //   });

  cy.get("#numb1").then(($element) => {
    const textValue = $element.text();
    cy.log(textValue);
  });

  // cy.get("#numb1").then(($element) => {
  //   const textValue = $element.text();
  //   cy.log(textValue);
  // });
});

it("Submit button", () => {
  cy.viewport("macbook-16");
  cy.visit("https://phptravels.com/");
  cy.get('a[href="https://phptravels.com/demo"]').parent(".nav-item").click();
  //cy.get('button[id="demo"]').should("be.visible").focus().click();
  cy.get("#demo")
    .contains("Submit")
    .should("be.visible")
    .should("be.enabled")
    .click({ force: true });
  cy.wait(1000);
  cy.on("window:alert", (text) => {
    // Perform assertions on the alert text
    expect(text).to.include("Please type your first name");
    // Automatically close the alert by accepting it
    // This simulates clicking the "OK" button
    cy.on("window:confirm", () => true);
  });
});

it("form filling", () => {
  cy.viewport("macbook-16");
  cy.visit("https://phptravels.com/");
  cy.get('a[href="https://phptravels.com/demo"]').parent(".nav-item").click();
  cy.get(".first_name").should("be.visible").focus().type("sakshi"); //it helps in loading
  cy.get(".last_name").should("be.visible").focus().type("shrivastav");
  cy.get('[name="business_name"]')
    .should("be.visible")
    .focus()
    .type("mybusiness");
  cy.get('[ name="email"][placeholder="Email"]')
    .should("be.visible")
    .focus()
    .type("abcemail");
  cy.get('[id="number"]').should("be.visible").focus().type("abc");

  cy.get("#demo")
    .contains("Submit")
    .should("be.visible")
    .should("be.enabled")
    .click({ force: true });

  cy.on("window:alert", (text) => {
    // Perform assertions on the alert text
    expect(text).to.include("Result number is invalid");
    // Automatically close the alert by accepting it
    // This simulates clicking the "OK" button
    cy.on("window:confirm", () => true);

    // cy.get('[id="number"]').should("be.visible").focus().type("abc");

    // cy.get("#demo")
    //   .contains("Submit")
    //   .should("be.visible")
    //   .should("be.enabled")
    //   .click({ force: true });
  });
});

it("Submit button", () => {
  cy.viewport("macbook-16");
  cy.visit("https://phptravels.com/");
  cy.get('a[href="https://phptravels.com/demo"]').parent(".nav-item").click();
});
