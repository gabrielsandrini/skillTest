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

function redirectToEditForm(index){
    location.href = "register.html?index="+index;    
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