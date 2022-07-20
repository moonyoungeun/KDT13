const calendar = document.querySelector("table");
const date = document.querySelector("#date");
const content = document.querySelector("#content");
// let btn = document.querySelector("button")


let target;

calendar.addEventListener("click",function(e){
    console.log("e-target",e.target.tagName);
    if(e.target.tagName === "P"){
        date.value = e.target.textContent;
        target = e.target.parentNode;
    }else if (e.target.tagName === "TD"){
        date.value = e.target.firstChild.textContent;
        target = e.target;
    }
})



// dateTable.addEventListener("click",function(e){
//     if(e.target.tagName === "p"){
//         date.value = e.target.textContent;
//         click = e.target.parentNode;
//     }
// });


// function writeSchedule() {
//     let div = document.createElement("div");
//     div.textContent = content.value;
//     click.append(div);
// }

