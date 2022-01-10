let countElement = document.getElementById("count-el");
let saveElement = document.getElementById("save-el")
let count = 0;

function increament() {
    count+=1;
    countElement.textContent = count;
}

function save() {
    let countStr = count+" - ";
    saveElement.textContent+=countStr;
    countElement.textContent=0
    count=0;
}