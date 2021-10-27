class Employee {

     //let firstName, lastName;
     //let empId;
    
    setDetails(firstName, lastName, empId){
        this.firstName = firstName;
        this.lastName = lastName;
        this.empId = empId;
    }
}

let emp = new Employee();
emp.setDetails('Satish', 'Jena', 671418);

console.log(emp.firstName +' '+ emp.lastName +', EmpId: '+ emp.empId);


/****************CONSTRUCTOR*********************/

class Employee {

    constructor(firstName, lastName, empId){
        this.firstName = firstName;
        this.lastName = lastName;
        this.empId = empId;
    }
}

let emp1 = new Employee('Pankaj', 'Jena', 855130);
let emp2 = new Employee('Satish', 'Jena', 671418);

console.log(emp1.firstName +' '+ emp1.lastName +', EmpId: '+ emp1.empId);
console.log(emp2.firstName +' '+ emp2.lastName +', EmpId: '+ emp2.empId);

