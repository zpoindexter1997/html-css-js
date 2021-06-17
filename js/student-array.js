let students = [
    {name:"Zha'Quon", color:"Blue", number:38},
    {name:"Greg", color:"Green", number:7}
];

const loaded=()=>{
    display();
}

const submit=()=>{
    let studentVal = document.getElementById("student").value;
    let colorVal = document.getElementById("color").value;
    let numberVal = document.getElementById("number").value;
    let studentJson = {
        name: studentVal,
        color: colorVal,
        number: numberVal
    }
    students.push(studentJson);
    display();
}

const display=()=>{
    let tbodyCtrl=document.getElementById("tbody");
    tbodyCtrl.innerHTML="";
    for(let student of students){
        let tr="<tr>";
        tr += `<td>${student.name}</td>`;
        tr += `<td>${student.color}</td>`;
        tr += `<td>${student.number}</td>`;
        tr+="</tr>";
        tbodyCtrl.innerHTML += tr;    
    }
};
