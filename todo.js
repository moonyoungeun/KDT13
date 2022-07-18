const inputTesk = document.querySelector(".input-task");

const addButton = document.querySelector(".input-btn");

const todoList = document.querySelector(".todo-List");

console.log(inputTesk, addButton, todoList);

addButton.addEventListener("click", function(){
    if(inputTesk.value === ""){
        inputTesk.setAttribute("placeholder","할 일을 입력해 주세요")
    } else{
        const addLi = document.createElement("Li");
        const checkBox = document.createElement("input");
        checkBox.setAttribute("type","checkbox");
        checkBox.addEventListener("click",function(){
            if(checkBox.checked === true){
                checkBox.parentNode.style.textDecoration = "Line-through";
            }else{
                checkBox.parentNode.style.textDecoration = "none";
            }
        })
        const deletBut = document.createElement("input");
        deletBut.setAttribute("type","button");
        deletBut.setAttribute("value","삭제");
        // deletBut.setAttribute("onClick","deleteTask(this);");

        addLi.append(checkBox);
        addLi.append(inputTesk.value);
        addLi.append(deletBut);

        todoList.append(addLi);


        inputTesk.value="";
    }
})

todoList.addEventListener("click",function(e){
    console.log(e.target.tagName);
    if(e.target.tagName ==="INPUT" && e.target.getAttribute("type") === "button"){
        e.target.parentNode.remove();
    }
})



// function deleteTask(t){
//     console.log(t);
//     t.parentNode.remove();
// }



// const test = document.querySelector(".test");
// test.addEventListener("click",function(){
//     console.log (test.checked);
// });