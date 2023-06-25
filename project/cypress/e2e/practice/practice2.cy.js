describe("Calculator testing", () => {
  before(() => {
    cy.visit("https://testsheepnz.github.io/BasicCalculator.html");
  });
  it("testing form website url", () => {
    cy.url().should("include", "/BasicCalculator.html");
    cy.url().should("eq", "https://testsheepnz.github.io/BasicCalculator.html");
  });
  it("testing  heading", () => {
    cy.get("h1").contains("Instructions");
  });
  it("testing adding and verying the result of calculation", () => {
    cy.wait(3000);
    let n = Math.floor(Math.random() * 10) + 1;
    let m = Math.floor(Math.random() * 10) + 1;
    let total = n + m;
    cy.get('input[name="number1"]').type(n);
    cy.get('input[name="number2"]').type(m);
    cy.get("#selectOperationDropdown").select("Add");
    cy.get('input[type="button"][value="Calculate"]').click();
    cy.get('[name="numberAnswer"]')
      .invoke("val")
      .then((value) => {
        let result = parseInt(value);
        expect(result).to.equal(total);
      });
  });
  it("testing subraction and verifying the result of calcaultaion", () => {
    cy.wait(3000);
    let n = Math.floor(Math.random() * 10) + 1;
    let m = Math.floor(Math.random() * 10) + 1;
    let total = Math.abs(n - m);
    cy.get('input[name="number1"]').type(n);
    cy.get('input[name="number2"]').type(m);
    cy.get("#selectOperationDropdown").select("Subtract");
    cy.get('input[type="button"][value="Calculate"]').click();
    cy.get('[name="numberAnswer"]')
      .invoke("val")
      .then((value) => {
        let result = Math.abs(parseInt(value));
        cy.log(typeof result, result);
        expect(result).to.equal(total);
      });
  });
  it("testing multiply and verifying the result of calculation", () => {
    cy.wait(3000);
    let n = Math.floor(Math.random() * 10) + 1;
    let m = Math.floor(Math.random() * 10) + 1;
    let total = n * m;
    cy.get('input[name="number1"]').type(n);
    cy.get('input[name="number2"]').type(m);
    cy.get("#selectOperationDropdown").select("Multiply");
    cy.get('input[type="button"][value="Calculate"]').click();
    cy.get('[name="numberAnswer"]')
      .invoke("val")
      .then((value) => {
        let result = parseInt(value);
        cy.log(typeof result, result);
        expect(result).to.equal(total);
      });
  });

  it("testing operations and verifying the result of calculation", () => {
    cy.wait(3000);
    let n = Math.random() + 10;
    let m = Math.random() + 10;
    let selectionOperator = "";
    const operators = ["+", "-", "*", "/"];
    const randomOp = Math.floor(Math.random() * operators.length);
    cy.log(operators[randomOp]);
    if (operators[randomOp] === "+") {
      selectionOperator = "Add";
    } else if (operators[randomOp] === "-") {
      selectionOperator = "Substract";
    } else if (operators[randomOp] === "*") {
      selectionOperator = "Multiply";
    } else if (operators[randomOp] === "/") {
      selectionOperator = "Divide";
    }
    let total = eval(`${n} ${operators[randomOp]} ${m}`).toFixed(4);
    cy.get('input[name="number1"]').type(n);
    cy.get('input[name="number2"]').type(m);
    cy.get("#selectOperationDropdown").select(selectionOperator);
    cy.get('input[type="button"][value="Calculate"]').click();
    cy.get('[name="numberAnswer"]')
      .invoke("val")
      .then((value) => {
        let result = parseFloat(value).toFixed(4);
        expect(result).to.equal(total);
      });
  });

  it("testing operations and verifying the result of calculation", () => {
    cy.wait(3000);
    function generateRandomString(length) {
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let randomString = "";
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
      }
      return randomString;
    }
    let temp = generateRandomString(5);
    let total = temp + temp;
    cy.get('input[name="number1"]').type(temp);
    cy.get('input[name="number2"]').type(temp);
    cy.get("#selectOperationDropdown").select("Concatenate");
    cy.get('input[type="button"][value="Calculate"]').click();
    cy.get('[name="numberAnswer"]')
      .invoke("val")
      .then((value) => {
        let result = value;
        expect(result).to.equal(total);
      });
  });
});
