it("Testing Radio Button and Checkboxes", () => {
  cy.viewport("macbook-16");
  cy.visit("https://letcode.in/test");
  cy.get('[class="card"]').contains("Toggle").click();
  //clicking on first radio button
  cy.get(".control").find("#yes").click();
  cy.get(".control").find("#yes").should("be.checked");
  //clicking and verifying next radio button
  cy.get(".control").find("#notfoo").should("be.checked");
  cy.get(".control").find("#foo").click();
  cy.get(".control").find("#foo").should("be.checked");
  cy.get(".control").find("#notfoo").should("not.be.checked");
  //verifying disable cursor
  cy.get(".control")
    .find("label[disabled]")
    .trigger("mouseover")
    .should("have.css", "cursor", "not-allowed");
  //find and verify checkbox is selected
  cy.get('input[type="checkbox"]').first().should("be.checked");
  cy.get('input[type="checkbox"]').first().click();
  cy.get('input[type="checkbox"]').first().should("not.be.checked");
});

it("Testing Drag", () => {
  cy.viewport("macbook-16");
  cy.visit("https://letcode.in/test");
  cy.get('[class="card"]').contains("AUI - 1").click();
  // cy.get("#sample-box").trigger("mousedown", { button: 0 });
  // cy.get(".field").trigger("mousemove").trigger("mouseup");
  //clicking on first radio button

  cy.get("#sample-box")
    .trigger("mousedown", { which: 1 }) // Start drag
    .trigger("mousemove", { clientX: 500, clientY: 20 }) // Simulate drag movement
    .trigger("mousemove", { clientX: 50, clientY: 250 })
    .trigger("mouseup", { force: true }); // Complete drag
});

it.only("Testing upload file", () => {
  cy.viewport("macbook-16");
  cy.visit("https://letcode.in/test");
  cy.get('[class="card"]').contains("File management").click();
  //cy.get("span").contains(" Choose a file… ").click();
  cy.wait(2000);
  //cy.get('input[name="resume"]').attachFile("F:Testing images/3KB pdf.pdf");
  cy.get('input[name="resume"]').selectFile(
    "F:Testing images/Physics-MCQ-8.pdf",
    { force: true }
  );
});
