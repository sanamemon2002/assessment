const inputBox = document.getElementById("inputbox")
const listContainer = document.getElementById("listcontainer")
document.getElementById("btn").addEventListener("click",addtask)

function addtask() {
    if (inputBox.value ==='') {
        alert("you must write something")
    } else {
        let li = document.createElement("li")
        li.innerHTML =inputBox.value
        listContainer.appendChild(li)
    }
    inputBox.value =''
}
function a() {
    document.getElementsByClassName("first").innerHTML=
    inputBox.value + document.cookie
}


