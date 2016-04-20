var block = document.getElementById("output");

function handleClick() {
    block.innerHTML = "I was clicked!";
}

function clearClick() {
    block.innerHTML = "";
    block.style.backgroundColor = "aquamarine";
}

function handleMouseOver () {
    block.style.backgroundColor = "beige";
}

block.onclick = handleClick;
block.onmouseout = clearClick;
block.onmouseover = handleMouseOver;

var input = document.getElementById("text");

function handleInput() {
    block.innerHTML = input.value;
}

input.onkeyup = handleInput;

var input = document.getElementById("text");

var button = document.getElementById("button");

function handleButtonPress() {
    if (input.value == "hi"){
        block.innerHTML = "hey";
    } else if (input.value == "bye"){
        block.innerHTML = "good riddance";
    } else if (isNaN(parseInt(input.value))){
        block.innerHTML = "I like the number" + input.value;
    } else {
        block.innerHTML = input.value;
    }
    block.innerHTML = input.value;
    input.value = "";
}

button.onclick = handleButtonPress;

