class Friend{
    constructor(name, phone, email, bff){
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.bff = bff;
}
toTr(){
    return `<tr>`
    + `<td>${this.name}</td>`
    + `<td>${this.phone}</td>`
    + `<td>${this.email}</td>`
    + `<td>${this.bff}</td>`
    + `<td></td>`
    + `</tr>`
}
}

let friends = [];

const loaded=()=>{
    display();
}

const submit=()=>{
    let nameCtrl = document.getElementById("name");
    let phoneCtrl = document.getElementById("phone");
    let emailCtrl = document.getElementById("email");
    let bffCtrl = document.getElementById("bff");
    let friend = new Friend(nameCtrl.value, phoneCtrl.value, emailCtrl.value, bffCtrl.checked ? "Yes" : "Nope Lmao")
    friends.push(friend);
    reset();
    display();

}

const display=()=>{
    let tbodyCtrl= document.getElementById("tbody");
    tbodyCtrl.innerHTML = "";
    for(let friend of friends){
        tbodyCtrl.innerHTML += friend.toTr();
    }
}

const reset=()=>{
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("bff").checked = false;
}