it("testing json", () => {
  var jsonData = [
    {
      name: "John",
      age: 30,
      city: "New York",
    },
    {
      name: "sakshi",
      age: 25,
      city: "Indore",
    },
    {
      name: "kirti",
      age: 28,
      city: "ujjain",
    },
  ];

  cy.log(JSON.stringify(jsonData)); //this makes json into string

  jsonData.forEach(function (person) {
    person.amigo = true;
  });
  cy.log(JSON.stringify(jsonData));

  jsonData.forEach(function (person) {
    delete person.amigo; //delete a field from every object
  });
  cy.log(JSON.stringify(jsonData));

  let myarray1 = ["GUVI", "I", "am", "Geek"];
  let resultString = myarray1.join(""); //this is used for making string of array
  cy.log(resultString);
  cy.log(typeof resultString);
});
