"use strict";
let date = new Date().toDateString();
document.querySelector('.lead').textContent = date;
document.querySelector('title').textContent = String(date) + " tasks";


let liList = document.getElementsByTagName("li");
let largo = liList.length;
document.querySelector(".number-tasks").innerHTML = String(largo) + " tasks";



function taskManager(){
    let checks = document.querySelectorAll(".form-check-input");
    checks.forEach(function(check){
        check.addEventListener("change", function(e){
            if(this.checked){
                console.log('checked');
                setTimeout(function() {
                    check.parentNode.parentNode.removeChild(check.parentNode);
                    let largo = liList.length;
                    document.querySelector(".number-tasks").innerHTML = String(largo) + " tasks";
                }, 100);
            }
            else{
                console.log('not checked');
            }
        });
    });
}

taskManager();



function addTask(){

    let inputValue = document.getElementById("task-desc").value;
    let list = document.getElementById("my-list");

    let text = document.createTextNode(inputValue);
    let li = document.createElement('li');

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        let checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.name = "name";
        checkbox.value = "value";
        checkbox.className = "form-check-input mr-3";

        li.setAttribute('class', 'list-group-item');
        li.append(checkbox);
        li.appendChild(text);
        list.appendChild(li);

        $('#exampleModal').modal('hide');
        $('#form-id').children('input').val('');

        taskManager();


    }

    let largo = liList.length;
    console.log(largo);
    document.querySelector(".number-tasks").innerHTML = String(largo) + " tasks";

}

