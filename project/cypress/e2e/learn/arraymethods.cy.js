it(" use of trim", () => {
  let text = "       Hello World!        ";
  let result = text.trim();
  cy.log(result);
});

it(" use of map method ", () => {
  const myarray = ["sakshi", "mahima", "kirti", "abhas"];
  const mynewarray = myarray.map(function (value) {
    return value + "!"; //make a new array by doing some operation in each array element
  });
  cy.log(mynewarray);
  console.log(mynewarray);
});

it(" use of foreach method ", () => {
  const myarray = ["sakshi", "mahima", "kirti", "abhas"];
  myarray.forEach(function (value) {
    cy.log(value + "#");
  });

  const num = [1, 2, 3, 4, 5];
  num.forEach((element) => {
    cy.log(element * element); //for performing some operations in an array
  });
});

it(" use of filter method ", () => {
  const myarray = [45, 28, 2, 56, 8, 12];
  const mynewarray = myarray.filter(function (value) {
    return value > 10; //filter out the data in an array that pass the condition
  });
  console.log(mynewarray);
});

it(" use of reduce method ", () => {
  const myarray = [1, 2, 3, 6, 0, 1, 2];
  const sakshi = (s1, s2) => {
    return s1 + s2; //reduce take two param then add the take result and new element then add and so on....reduce always returns a value
  };
  const mynewarray = myarray.reduce(sakshi);
  console.log(mynewarray);
});

it(" use of Array.from method ", () => {
  const name = "sakshi";
  const mynewarray = Array.from(name);
  cy.log(mynewarray); //to make an array from a string
  console.log(mynewarray);
});

it.only("for of loop use", () => {
  const myarray = [1, 2, 3, 6, 0, 1, 2];
  for (let i of myarray) {
    cy.log(i); //for printing or access each element of array
  }
});

it.only("for in loop use", () => {
  const myarray = [1, 2, 3, 6, 0, 1, 2];
  for (let i in myarray) {
    cy.log(i); //for printing or access each key of array
  }
});
