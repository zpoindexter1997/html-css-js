class Assessment{
constructor(name, score){
    this.name = name;
    this.score= score;
}
addTr(){
    return `<tr>`
    + `<td></td>`
    + `<td>${this.name}</td>`
    + `<td>${this.score}</td>`
    + `</tr>`
}
}

let assessments = [];

const clicked=()=>{
    let name = document.getElementById("name").value;
    let score = document.getElementById("score").value;
    let assessment = new Assessment(name, score);
    assessments.push(assessment);
    display();
    reset();
}


const display=()=>{
    let tbodyCtrl = document.getElementById("tbody");
    let avgCtrl = document.getElementById("avg");
    let sum = 0;
    avgCtrl.innerText = "";
    tbodyCtrl.innerHTML = "";
    for(let assessment of assessments){
        tbodyCtrl.innerHTML+=assessment.addTr();
        sum += +assessment.score;

    }
    avgCtrl.innerText = (sum / assessments.length).toFixed(2);

}

const reset=()=>{
    document.getElementById("name").value = "";
    document.getElementById("score").value = "";
}

const loaded=()=>{
    let input = document.getElementById("score");
    input.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("add").click();
        }
    });
}