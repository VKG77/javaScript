let str = "abba";

function isPalindromeOrNot(str){
  let temp="";
  for(let i=str.length-1;i>=0;i--){
  temp+=str[i];

  }

  return temp;
}
let b= isPalindromeOrNot(str);
if(b==str){
   console.log("yes");
}else{
    console.log("No");
}

let r=2;
function Area_of_circle(){
  let area = 2*r*r;
  return area;
}
let a=Area_of_circle(r);
console.log(a);


let obj ={
  firstName : "Vivek",
  lastName :"Gupta"
}

let obj2 = Object.assign(obj);
console.log(obj2)

// question 5
const Employee = [{
  Name : "ashih Kumar", 
  age : 20, 
  salary : 45000,
  DOB : "25-01-2000"
},
{
  Name : "Vivek Kumar", 
  age : 22, 
  salary : 56000,
  DOB : "25-01-2000"
},
{
  Name : "ravi Kumar", 
  age : 20, 
  salary : 2000,
  DOB : "24-01-2000"
},
{
  Name : "Rakesh raj", 
  age :20, 
  salary : 50005,
  DOB : "25-01-2000"
},
{
  Name : "pavnesh Kumar", 
  age : 25, 
  salary : 500,
  DOB : "25-01-2002"
}];

console.log(Employee)

// filter all employees with salary greater than 5000

let filterSalary = Employee.filter(e => e.salary > 5000)
console.log(filterSalary)

//group employee on the basis of their age

console.log("**********************************************")

const groupByAge = (key,Employee) => Employee.reduce((cache,emp)=>
({...cache,[emp[key]]:
  emp[key] in cache
  ? cache[emp[key]].concat(emp)
  : [emp]

}),{}
)
console.log(groupByAge('age',Employee));

// fetch employees with salary less than 1000 and age greater than 20. Then give them an increment 5 times their salary.
console.log("************************");

function fetchSalaryAndAge(emp){
  emp.map(e => {
    if(e.salary<1000 && e.age>20){
      e.salary *= 5;
    }
  })
  return emp;
}
console.log(fetchSalaryAndAge(Employee))

