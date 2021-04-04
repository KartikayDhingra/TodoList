
let date = new Date();
let day = date.getDay();
let time = date.toLocaleTimeString("en-IN",{ hour: '2-digit'})
let text;

if(time>="12 am" && time<="12 pm"){
    text = "Morning";
}
else if(time>="12 pm" && time<="5 pm"){
    text = "Afternoon";
}
else{
    text = "Evening";
}
console.log(time);


document.querySelector(".heading-primary").innerHTML = "Good " + text + " Kartikay!";

let currentDay;
switch (day) {
    case 0:
        currentDay = "Sunday"
        break;
    case 1:
        currentDay = "Monday"
        break;    
    case 2:
        currentDay = "Tuesday"
        break;
    case 3:
        currentDay = "Wednesday"
        break;    
    case 4:
        currentDay = "Thursday"
        break;
    case 5:
        currentDay = "Friday"
        break;  
    case 6:
        currentDay = "Saturday"
        break;
    

    default:
        break;
}

document.querySelector(".heading-secondary").innerHTML = currentDay;

let checkButtonCLicked = document.querySelectorAll(".btn-check");


for(let i=0;i<checkButtonCLicked.length;i++){
    checkButtonCLicked[i].addEventListener("click", (e) => {

        let listCLicked = document.querySelectorAll(".list-item")[i];
        let listText = listCLicked.innerHTML;
        if(listCLicked.innerHTML===listText){
            listCLicked.innerHTML = "Completed"
        }
        else if(listCLicked.innerHTML==="Completed"){
            listCLicked.innerHTML = listText;
        }
        listCLicked.classList.add("completed");

    })
}

let checkboxes = document.querySelectorAll('input[type="checkbox"]');
let clickedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
let count = checkboxes.length;

countCheckBoxes();
function countCheckBoxes() {
    for(let i=0; i<checkboxes.length; i++){

        if(checkboxes[i].checked==true){
            continue;
        }
        else if(checkboxes[i].addEventListener("click",() => {
            count--;
            document.querySelector(".items-left").innerHTML="Tasks Left: " + count;
        } ,{once:true}));
        else{
            document.querySelector(".items-left").innerHTML="Tasks Left: " + count;
        }
        
    }
}

function allowDrop(ev) {
    ev.preventDefault();
  }
  
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
  
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("div");
    ev.target.appendChild(document.getElementById(data));
}


// clearTasks.addEventListener("click", () => {
//     for(let i=0; i<itemsBox.length; i++){
//         if(document.querySelectorAll(".list-item")[i].classList.contains("completed")){
//             itemsBox[i].remove();
//         }
//     }
// })





// checkboxes[i].addEventListener("click", (e) => {
                
//     count++;
//     document.querySelector(".items-left").innerHTML="Tasks Completed: " + count;

// });

