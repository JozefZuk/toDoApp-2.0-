const taskBox = document.querySelector('.mainDiv__contentDiv__readyTask');

const addBtn = document.querySelector('#addBtn');
const input = document.querySelector('.textInput');


let i = 0;
let task = [];
let  readyTask = [];
let title = [];
let btnId = [];
let checkbox = [];

addBtn.addEventListener("click",function(){
    task[i] = input.value;
    if(task[i] == ""){
        alert("You didn't enter anything");
    }
    else{
        readyTask[i] = document.createElement("DIV");
        taskBox.appendChild(readyTask[i]);
        readyTask[i].classList.add("taskDiv");

        title[i] = document.createElement("H1")                  
        title[i].appendChild(document.createTextNode(task[i]));     
        readyTask[i].appendChild(title[i]);

        btnId[i] = document.createElement("BUTTON");
        btnId[i].classList.add("delBtn");
        btnId[i].value = i; 

        btnId[i].addEventListener("click",function(){
            readyTask[this.value].remove(); 
        })
  
        checkbox[i] = document.createElement("BUTTON");
        checkbox[i].classList.add("checkBox");
        checkbox[i].value = i;
        checkbox[i].addEventListener("click",function(){
            checkbox[this.value].classList.toggle('check');
        })

        readyTask[i].appendChild(btnId[i]);        
        readyTask[i].appendChild(checkbox[i]);

        i ++;
        input.value = "";   

       

    }
})
