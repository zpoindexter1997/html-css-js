$(()=>{
let nbr = 0;
    $("#minus").on("click", ()=>{
    display(--nbr);
    })

    $("#plus").on("click", ()=>{
    display(++nbr);
    })
    
    display(nbr)
})

const display=(nbr)=>{
    let cntCtrl = $("#cnt").val(nbr);
        if(nbr !== 0){
        cntCtrl.css("color", nbr % 2 === 0 ? "red" : "black");
        cntCtrl.css("fontStyle", nbr % 3 === 0 ? "italic" : "normal");
        cntCtrl.css("fontWeight", nbr % 7 === 0 ? "bold" : "normal");
    }
}