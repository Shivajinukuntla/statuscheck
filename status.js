let todoItemsContainer = document.getElementById('todoItemsContainer');
let addTodoButton = document.getElementById('addTodoButton');

let todolist = [{
        text: "Thinnali",
        uniqueno: 1
    },
    {
        text: "Padukovali",
        uniqueno: 2

    },
    {
        text: "Chadhukovali",
        uniqueno: 3
    }
]

function todostatuschange(checkboxid, labelid) {
    let checkid = document.getElementById(checkboxid);
    let labeid = document.getElementById(labelid);

    labeid.classList.toggle('checked');
}

function ondeletetodo(todoid) {
    let todoa = document.getElementById(todoid);
    todoItemsContainer.removeChild(todoa);
}

function createandappendtodo(todo) {
    let todoid = "todo" + todo.uniqueno;
    let checkboxid = "checkbox" + todo.uniqueno;
    let labelid = "label" + todo.uniqueno;

    let todoelement = document.createElement('li');
    todoelement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoelement.id = todoid;
    todoItemsContainer.appendChild(todoelement);

    let inputelement = document.createElement('input');
    inputelement.type = "checkbox";
    inputelement.id = checkboxid;

    inputelement.onclick = function() {
        todostatuschange(checkboxid, labelid);
    }
    inputelement.classList.add("checkbox-input");
    todoelement.appendChild(inputelement)

    let labelconatiner = document.createElement('div');
    labelconatiner.classList.add("label-container", "d-flex", "flex-row");
    todoelement.appendChild(labelconatiner);

    let labelelement = document.createElement('label');
    labelelement.setAttribute("for", checkboxid);
    labelelement.id = labelid;
    labelelement.classList.add("checkbox-label");
    labelelement.textContent = todo.text;
    labelconatiner.appendChild(labelelement);

    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelconatiner.appendChild(deleteIconContainer);

    let deleteicon = document.createElement("i");
    deleteicon.classList.add("far", "fa-trash-alt", "delete-icon");

    deleteicon.onclick = function() {
        ondeletetodo(todoid);
    };
    deleteIconContainer.appendChild(deleteicon);

}

for (let todo of todolist) {
    createandappendtodo(todo)
}

function onaddtodo() {
    let userinput = document.getElementById('todoUserInput');
    let uservalue = userinput.value;

    if (uservalue === "") {
        alert("Enter valid Text");
        return;
    }
    let todocount = todolist.length
    todocount = todocount + 1

    let newtodo = {
        text: uservalue,
        uniqueno: todocount
    }
    createandappendtodo(newtodo);
    userinput.value = "";
}
addTodoButton.onclick = function() {
    onaddtodo();
}