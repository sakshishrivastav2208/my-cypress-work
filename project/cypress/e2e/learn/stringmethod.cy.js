it("stringmethod", () => {
  stringmy = "SaKsHi";
  mynewString = stringmy.toLowerCase();
  cy.log(mynewString);
  mynewString2 = stringmy.toUpperCase();
  cy.log(mynewString2);

  my = "Your bill amount is Rupees 5000";
  amount = my.slice(27);
  cy.log(amount);
  cy.log(typeof amount);
  newamount = Number.parseInt(amount); //convert string into number
  cy.log(typeof newamount);
});

it("stringmethod1", () => {
  stringmy = "Sakshi";
  myslice = stringmy.slice(2, 5);
  cy.log(myslice);

  myfullName = "Sakshi Shrivastav";
  cy.log(myfullName.replace("Shrivastav", "Kapoor"));

  myfirstName = "Aishwarya";
  cy.log(myfirstName.concate("Rai", myfullName, "are good friends"));

  const str1 = "Cats are the best!";
  cy.log(str1.endsWith("best!"));

  const mood = "Happy! ";
  cy.log(`I feel ${mood.repeat(3)}`);
});
