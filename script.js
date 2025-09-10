const increasebtn = document.getElementById("increasebtn");
const resetbtn = document.getElementById("resetbtn");
const decreasebtn = document.getElementById("decreasebtn");
const lable = document.getElementById('countLable');
let input = document.getElementById('inputfield').value;

let count = 0;

function triggerPopAnimation(value, isIncrease) {
    const iterLabel = document.getElementById('iterLable');
    
    // Set text
    iterLabel.textContent = isIncrease ? `+${value}` : `-${value}`;
    
    // Remove old classes
    iterLabel.classList.remove('pop-animation', 'positive', 'negative');
    
    // Add color class
    if (isIncrease) {
        iterLabel.classList.add('positive');
    } else {
        iterLabel.classList.add('negative');
    }
    
    // Force reflow
    iterLabel.offsetHeight;
    
    // Add animation class
    iterLabel.classList.add('pop-animation');
}

document.getElementById('increasebtn').onclick = function () {
    
    // Get the input value fresh each time
    input = document.getElementById('inputfield').value
    input = Number(input);

    if(isNaN(input) || input === 0){
        input = 1;
    }

    triggerPopAnimation(input, true);

    count = count + input;
    lable.textContent = count;
}

document.getElementById('decreasebtn').onclick = function () {

    let input = document.getElementById('inputfield').value;
    input = Number(input);

    if(isNaN(input) || input === 0){
        input = 1;
    }
    
    triggerPopAnimation(input, false);
    
    count = count - input;
    lable.textContent = count;
}

document.getElementById('resetbtn').onclick = function () {
    count = 0;
    input = 1;
    document.getElementById('inputfield').value = null;
    lable.textContent = count;
}