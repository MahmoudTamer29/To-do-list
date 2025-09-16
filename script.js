const taskContainer = document.querySelector(".tasksContainer")

const addBtn = document.querySelector(".addButton")

const clearBtn = document.getElementById("clearButton")

let tasks = document.querySelectorAll(".inputField")

// ==================
// TO STORE THE TASKS
// ==================


const updateStorage = () => {
    localStorage.setItem("tasks", taskContainer.innerHTML);
}

const getTasks = () => {
    taskContainer.innerHTML = localStorage.getItem("tasks");
}

getTasks();

addBtn.addEventListener("click", () => {
    // The Input Field
    let taskfield = document.createElement("p");
    taskfield.className = "inputField";
    taskfield.setAttribute("contenteditable" , "true")
    // The Removale Icon
    let removeicon = document.createElement("img")
    removeicon.src = "delete.png"
    removeicon.className = "removeButton"
    
    taskContainer.appendChild(taskfield).appendChild(removeicon);
})

// ============================
// TO REMOVE AN INDIVIDUAL TASK
// ============================

taskContainer.addEventListener("click", (e) => {
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    } else if(e.target.tagName === "P") {
        tasks = document.querySelectorAll(".inputField");
        tasks.forEach(task => {
            task.onkeyup = function (){
                updateStorage();
            }
        })
    }
})


// ========================== 
// TO MARK THE COMPLETED TASK
// ==========================

taskContainer.addEventListener("dblclick", (e)=> {
    if (e.target.tagName === "P"){
        e.target.style.backgroundColor = 'darkgray';
        e.target.style.textDecorationLine = 'line-through';
        updateStorage();
    }
})


// =======================
// TO REMOVE ALL THE TASKS
// =======================


clearBtn.addEventListener("click", () => {
    taskContainer.innerHTML = "";
    updateStorage();
})



