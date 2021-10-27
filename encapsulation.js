class Employee {

    setEmpDetails(name, empId, phoneNo){

        this.name = name;
        this.empId = empId;
        this.phoneNo = phoneNo;
    }

    getEmpName(){
        return this.name;
    }
    getEmpId(){
        return this.empId;
    }
    getPhoneNo(){
        return this.phoneNo;
    }

}

let emp1 = new Employee();
emp1.setEmpDetails('Satish Jena','123456','321456987');
console.log(emp1.getEmpId, emp1.getEmpName, emp1.getPhoneNo);