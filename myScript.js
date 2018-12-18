//This function changed the text in the demo paragraph

function demoChange() {
    var textOne = "whatever text in it";
    var textTwo = "paragraph changed";
    
    if (document.getElementById('demo').innerHTML === textOne) {
        document.getElementById('demo').innerHTML = textTwo; 
    }
    else {
        document.getElementById('demo').innerHTML = textOne;
    }
    
    return;
}

//Defining variables that I'm not using

var x = 5;
var y = 6;
var z = x + y;

//This function changes the text in the math paragraph

function mathChange() {
    var textOne = "something like \"What is 5 + 6?\"";
    var textTwo = "11";
    
    if (document.getElementById('math').innerHTML === textOne) {
        document.getElementById('math').innerHTML = textTwo;
    }
    else {
        document.getElementById('math').innerHTML = textOne;
    }
    
    return;
}