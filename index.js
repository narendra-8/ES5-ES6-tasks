// B251WE- ES5 & ES6 tasks


const scores = [
  {
    marks: 32,
    name: "Yvette Merritt"
  },
  {
    marks: 57,
    name: "Lillian Ellis"
  },
  {
    marks: 22,
    name: "Mccall Carter"
  },
  {
    marks: 21,
    name: "Pate Collier"
  },
  {
    marks: 91,
    name: "Debra Beard"
  },
  {
    marks: 75,
    name: "Nettie Hancock"
  },
  {
    marks: 20,
    name: "Hatfield Hodge"
  }
];



//For understanding : iteration logic

// console.log(scores[0].name)


//Fn logic to call the name inside the object

const name1 = ({name})=> name



// use the fn as below with map to avoid looping concept
// TASK 1
console.log(scores.map(name1))

 //Task2
// MARKS ABOVE 40

  console.log(scores.filter(({marks,name})=>marks>=40))


//Task3
//TO FILTER MARKS LESS THAN 40

  console.log(scores.filter(({name,marks})=>marks<40).map(({name})=>name))

//TASK 4

TO PRINT THE AVERAGE

 console.log((scores.map(({marks})=>marks).reduce((sum,curr)=>sum+curr))/scores.length)


//TASK 5

// HIGHEST MARK

  const Toppers = scores.filter(x => x.marks >=90);
  const Grade1=Toppers.map((x) => x.name)
  console.log(Grade1)





*****************************_________________________________****************************

//CHECK THE BELOW EXAMPLE HOW LOGIC IS FORMED

const scores1 = 
  {
    marks: 32,
    name: "Yvette Merritt"
  }

// fn for calling name

const answer = ({name})=>name;

console.log(answer(scores1))
