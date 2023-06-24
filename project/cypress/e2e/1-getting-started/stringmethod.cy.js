it("stringmethod1", () => {
  let stringmy = "SaKsHi";
  let mynewString = stringmy.toLowerCase();
  cy.log(mynewString);
  let mynewString2 = stringmy.toUpperCase();
  cy.log(mynewString2);

  let my = "Your bill amount is Rupees 5000";
  let amount = my.slice(27);
  cy.log(amount);
  cy.log(typeof amount);
  let newamount = Number.parseInt(amount); //convert string into number
  cy.log(typeof newamount);
});

it("stringmethod2", () => {
  let stringmy = "Sakshi";
  let myslice = stringmy.slice(2, 5);
  cy.log(myslice);

  let myfullName = "Sakshi Shrivastav";
  cy.log(myfullName.replace("Shrivastav", "Kapoor"));

  let myfirstName = "Aishwarya";
  cy.log(myfirstName.concat("Rai ", myfullName, " are good friends"));

  const str1 = "Cats are the best!";
  cy.log(str1.endsWith("best!"));

  const mood = "Happy! ";
  cy.log(`I feel ${mood.repeat(3)}`);
});
