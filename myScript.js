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
//This function changes the text in the math paragraph
function mathChange(x, y, calc) {
    var textOne = "something like \"What is " + x + " + " + y + "?\"";
    var textTwo = Number(x) + Number(y);
    calc = Boolean(calc);
    
    if (calc) {
        if (document.getElementById('math').innerHTML !== textOne) {
            document.getElementById('math').innerHTML = textOne;
        }
        else {
            document.getElementById('math').innerHTML = textTwo;
        }
    }
    else {
        document.getElementById('math').innerHTML = textOne;
    }
    
    
    return;
}