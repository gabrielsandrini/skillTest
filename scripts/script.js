/**
*List of functions in this file:
*   getEmployeesArray()
*       return the array of employees saved on the localStorage
*
*   getNewEmployeObject()
*       return a new employee object with all atributes empty
*
*   getEmploye(index)
*        param = index of the wanted employee
*        return a specific employe saved on the localStorage
*
*   saveArrayInLocalStorage(array)
*       param = array of employees to save in the localStorage
*       whithout return   
*
*   deleteEmploye(index)
*       param = index of employees to remove in the array saved on localStorage
*       whithout return
*
*   redirectToEditForm(index)
*   getParameterFromActualUrl(parameterName)    
*   Setters
*
*/

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

function getNewEmployeObject(){
    let employe = {
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
    
    return employe;
}

function getEmploye(index)
{
    let employeesArray = getEmployeesArray();
    return employeesArray[index];
}

function saveNewEmploye(employeObject){
    let array = getEmployeesArray();
    array.push(employeObject);
    saveArrayInLocalStorage(array);
}

function saveArrayInLocalStorage(array)
{
    let employeJson = JSON.stringify(array);
    localStorage.setItem('employees', employeJson);
}

function deleteEmploye(index){
    let confirm = window.confirm("Are you sure you want to delete this item?");
    if(confirm){
        let array = getEmployeesArray();
        array.splice(index,1);
        saveArrayInLocalStorage(array);
        location.reload();
    }
}

function updateEmploye(index, employe){
    let employeesArray = getEmployeesArray();
    employeesArray[index] = employe;
    saveArrayInLocalStorage(employeesArray);
}

function redirectToEditForm(index){
    location.href = "register.html?index="+index;    
}

function getParameterFromActualUrl(parameterName){
    parameterName = parameterName + "=";
    let urlParameters = window.location.search;
    let indexOfSearchedParameter = urlParameters.indexOf(parameterName);
    let indexOfTheValue = indexOfSearchedParameter + parameterName.length;
    let parameterValue =  urlParameters.substr(indexOfTheValue).trim();
    return parameterValue;
}

//Setters
function setName(employe, name){
    employe.name = name;
}

function setAge(employe,age){
    employe.age = age;
}

function setBirthDay(employe, birthDay){
    employe.birthDay = birthDay;
}

function setPhoneNumber(employe,phoneNumber){
    employe.phoneNumber = phoneNumber;
}

function setRg(employe, rg){
    employe.rg = rg;
}

function setCpf(employe, cpf){
    employe.cpf = cpf;
}

function setAddress(employe, address){
    employe.address = address;
}

function setAddressNumber(employe, number){
    employe.number = number;
}

function setCity(employe, city){
    employe.city = city;
}

function setState(employe, state){
    employe.state = state;
}

function setNotes(employe, notes){
    employe.notes = notes;
}