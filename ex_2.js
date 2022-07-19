let dateTable = document.querySelector("table");
let dayDate = document.querySelector("#date");
let content = document.querySelector("#content");
let btn = document.querySelector("button")

dateTable.addEventListener("click",function(e){
    if(e.target.tagName === "p"){
        date.value = e.target.textContent;
        click = e.target.parentNode;
    }
})


function writeSchedule() {
    let div = document.createElement("div");
    div.textContent = content.value;
    click.append(div);
}