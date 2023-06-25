describe("Shopping website testing", () => {
  before(() => {
    cy.visit("https://react-shopping-cart-67954.firebaseapp.com/");
  });
  it("testing the shopping website url", () => {
    cy.url().should("include", "/react-shopping-cart-67954.firebaseapp.com/"); // => true
    cy.url().should("eq", "https://react-shopping-cart-67954.firebaseapp.com/");
  });

  it("adding a product to cart and verifying it is added", () => {
    cy.get("label").contains("M").click({ timeout: 5000 });
    cy.get("button").contains("Add to cart").click();
    cy.get('[class="sc-1h98xa9-3 VLMSP"]')
      .invoke("text")
      .then((value) => {
        const num1 = value;
        cy.log("no of items in cart=", num1);
        cy.get('[class="sc-1h98xa9-3 VLMSP"]').should("have.text", num1);
        cy.get("button").find("span").contains("X").click();
      });
  });
  it("checking the button for adding multiple product to cart ", () => {
    cy.get("label").contains("ML").click({ timeout: 5000 });
    cy.get("label").contains("S").click({ timeout: 5000 });
    cy.get("button").contains("Add to cart").click();
    cy.get("button").find("span").contains("X").click();
    cy.get("button").contains("Add to cart").click();
    cy.get('[class="sc-1h98xa9-3 VLMSP"]').should("have.text", 2);
    cy.get('[class="sc-11uohgb-0 hDmOrM"]')
      .find("button")
      .contains("-")
      .should("be.disabled");
    cy.get('[class="sc-11uohgb-0 hDmOrM"]')
      .find("button")
      .contains("+")
      .click();
    cy.get('[class="sc-11uohgb-0 hDmOrM"]')
      .find("button")
      .contains("-")
      .should("not.be.disabled");
    cy.get('[class="sc-1h98xa9-3 VLMSP"]').should("have.text", 3);
  });

  it("checking addition of price of two products added in cart ", () => {
    let p1 = "";
    let p2 = "";
    let Newp1 = 0.0;
    let Newp2 = 0.0;
    cy.get("button").contains("Add to cart").click();
    cy.get("button").find("span").contains("X").click();
    cy.get("button").eq(1).contains("Add to cart").click();
    cy.get('[class="sc-11uohgb-4 bnZqjD"]')
      .find("p")
      .eq(0)
      .invoke("text")
      .then((value) => {
        p1 = value;
        cy.log(p1);
        Newp1 = parseFloat(p1.slice(1, 8));
        cy.log("final price of first product=", Newp1);
        cy.get('[class="sc-11uohgb-4 bnZqjD"]')
          .find("p")
          .eq(1)
          .invoke("text")
          .then((value) => {
            p2 = value;
            cy.log(p2);
            Newp2 = parseFloat(p2.slice(1, 8));
            cy.log("final price of second product=", Newp2);
            let sum = Newp1 + Newp2;
            cy.log("sum of both the product price=", sum);
            let total = 0.0;
            cy.get('[class="sc-1h98xa9-8 bciIxg"]')
              .find("p")
              .invoke("text")
              .then((value) => {
                total = parseFloat(value.slice(1, 8));
                cy.log("total=", total);
                if (total === sum) {
                  cy.log("yes both products price's addition is correct");
                }
              });
          });
      });
  });

  it("verifying the added product equal to quantity of that product", () => {
    let n = Math.floor(Math.random() * 10) + 1;
    cy.log(n);
    for (let i = 1; i <= n; i++) {
      cy.get("button").contains("Add to cart").click();
    }
    cy.get('[class="sc-11uohgb-1 buqxEg"]')
      .invoke("text")
      .then((value) => {
        cy.log(value);
        let p1 = value.split(":");
        if (n == p1[1]) {
          cy.log("Condition is true");
        } else {
          cy.log("Condition is false");
        }
      });
  });

  it("verifying the added product equal to quantity of that product", () => {
    let n = Math.floor(Math.random() * 10) + 1;
    cy.log(n);
    for (let i = 1; i <= n; i++) {
      cy.get("button").contains("Add to cart").click();
    }
    cy.get('[class="sc-11uohgb-4 bnZqjD"]')
      .find("p")
      .invoke("text")
      .then((value) => {
        let price = parseFloat(value.slice(1, 8));
        let newprice = price * n;
        cy.log("newprice=", newprice);
        cy.get('[class="sc-1h98xa9-8 bciIxg"]')
          .find("p")
          .invoke("text")
          .then((value) => {
            let total = parseFloat(value.slice(1, 8));
            cy.log("total=", total);
            if (newprice === total) {
              cy.log("test case passed");
            } else {
              cy.log("test case failed");
            }
          });
      });
  });
});
