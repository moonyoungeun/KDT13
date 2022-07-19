// let modifyBtn1 =document.querySelector(".modify-btn-1");

// modifyBtn1.addEventListener("click", function(){
//     document.querySelector(".text-input").setAttribute("placeholder","변경1을 누르셨습니다");
// })


// let modifyBtn2 =document.querySelector(".modify-btn-2");

// modifyBtn2.addEventListener("click", function(){
//     document.querySelector(".text-input").setAttribute("type","radio");
// })

// $(".modify-btn-1").on("click",function(){
//     $(".text-input").attr("placeholder","변경1을 누르셨습니다");
// })


// $("div").css("background-color","orange");

// document.querySelector("div").style=" background-color: skyblue; font-size: 40px;"


// function changCss(){
//     document.querySelector("div").style = "background-color: orange;"
// }

// function changCss2(){
//     $("div").css("background-color","skyblue");
// }


// function changCss(){
//     $("p").html("<h1>알록달록무지개</h1>");
// }


// function changCss(){
//     document.querySelector("p").css("<h1>알록달록무지개</h1>");
// }


// let li =document.createElement("li");

// li.textContent = "추가용";

// $(".me").after(li);




// let li = document.querySelector("li");

// function changCss(){
//     $("ul").prepend("input-text");
// }


// const textInput =document.querySelector(".input-text");

// const textButton =document.querySelector("modify-btn");

// const textButton2 =document.querySelector("modify-btn2");

// const list = document.querySelector("ul");


// textButton.addEventListener("click",function(){
//     const addli = document.createElement("li");
//     addli.textContent = textInput.Value;

//     List.append(addli);
//     testInput = "";

// })



// function prependLi(){
//     let text = $(".input-text").val();
//     $("ul").prepend(`<li>${text}</li>`);
// }


const children =document.querySelector("div").children;

const childNodes =document.querySelector("div").childNodes;

console.log("children",children);

console.log("childNodes",childNodes);