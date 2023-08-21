import "cypress-file-upload";
import "@4tw/cypress-drag-drop";

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

  cy.get("#sample-box")
    .trigger("mousedown", { which: 1 }) // Start drag
    .trigger("mousemove", { clientX: 500, clientY: 20 }) // Simulate drag movement
    .trigger("mousemove", { clientX: 50, clientY: 250 })
    .trigger("mouseup", { force: true }); // Complete drag
});

it("Testing upload file", () => {
  const filepath = "PNG.png";
  cy.viewport("macbook-16");
  cy.visit("https://letcode.in/test");
  cy.get('[class="card"]').contains("File management").click();
  cy.wait(2000);
  cy.get('input[name="resume"]').attachFile(filepath);
});

it("Testing download file by just clicking on button", () => {
  cy.viewport("macbook-16");
  cy.visit("https://letcode.in/test");
  cy.get('[class="card"]').contains("File management").click();
  cy.wait(2000);
  cy.get("button").contains("Download Excel").click();
});

it("Testing download file with url directly", () => {
  cy.viewport("macbook-16");
  cy.visit("https://letcode.in/test");
  cy.downloadFile(
    "https://letcode.in/assets/files/sample.txt",
    "cypress/downloads",
    "textfile.txt"
  );
});

it("Testing multiple select", () => {
  cy.viewport("macbook-16");
  cy.visit("https://letcode.in/test");
  cy.get('[class="card"]').contains("AUI - 4").click();
  cy.get("h3").contains("Selenium").click();
  cy.get("h3").contains("Postman").click();
  cy.get('div[id="selectable"]')
    .first()
    .should("have.css", "background-color", "rgb(230, 230, 250)"); //verify css color change also
});

it("Testing Sorting", () => {
  cy.viewport("macbook-16");
  cy.visit("https://letcode.in/test");
  cy.get('[class="card"]').contains("AUI - 3").click();
  cy.get("#sample-box1").drag("#sample-box1"); //not working for now

  cy.wait(2000);
});

it("Testing Sorting drag and drop", () => {
  cy.viewport("macbook-16");
  cy.visit("https://letcode.in/test");
  cy.get('[class="card"]').contains("AUI - 3").click();
  cy.get('[id="sample-box1"]').first().trigger("dragstart", { DataTransfer });
  cy.get('[id="cdk-drop-list-1"]').trigger("drop", { DataTransfer });
});
