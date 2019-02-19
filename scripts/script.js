function getEmployeesArray()
{
    let employeesJson = localStorage.getItem('employees');
    if(employeesJson === null)
    {
        return [];
    }
    let array = JSON.parse(employeesJson);
    return array;
}

function getNewEmployeeObject(){
    let employee = {
        name : null,
        age : null,
        birthDay : null,
        phoneNumber : null,
        rg : null,
        cpf : null,
        address : null,
        number : null,
        city : null,
        state : null,
        notes : null
    };
    
    return employee;
}

function saveNewEmployee(employeeObject){
    let array = getEmployeesArray();
    array.push(employeeObject);
    
    let employeeJson = JSON.stringify(array);
    localStorage.setItem('employees', employeeJson);
}

//Setters
function setName(employee, name){
    employee.name = name;
}

function setAge(employee,age){
    employee.age = age;
}

function setBirthDay(employee, birthDay){
    employee.birthDay = birthDay;
}

function setPhoneNumber(employee,phoneNumber){
    employee.phoneNumber = phoneNumber;
}

function setRg(employee, rg){
    employee.rg = rg;
}

function setCpf(employee, cpf){
    employee.cpf = cpf;
}

function setAddress(employee, address){
    employee.address = address;
}

function setAddressNumber(employee, number){
    employee.number = number;
}

function setCity(employee, city){
    employee.city = city;
}

function setState(employee, state){
    employee.state = state;
}

function setNotes(employee, notes){
    employee.notes = notes;
}

//Getters

function getName(employee){
   return employee.name;
}

function getAge(employee){
    return employee.age;
}

function getBirthDay(employee){
    return employee.birthDay;
}

function getPhoneNumber(employee){
    return employee.phoneNumber;
}

function getRg(employee){
    return employee.rg;
}

function getCpf(employee){
    return employee.cpf;
}

function getAddress(employee){
    return employee.address;
}

function getAddressNumber(employee){
    return employee.number;
}

function getCity(employee){
    return employee.city;
}

function getState(employee){
    return employeeArray.state;
}

function getNotes(employee){
    return employee.notes;
}