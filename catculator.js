var stack = [];
var valueString = "0";
var btnSound = new sound("button.wav");
var dingSound = new sound("bell.wav");
var meowSound = new sound("meow.wav");

function pushThis() {
    dingSound.play();
    document.getElementById("displayBar").style.backgroundColor = "#B7E4C6";
    var pushValue = parseFloat(document.getElementById("displayValues").innerHTML);
    stack.push(pushValue);
    valueString = "";
    document.getElementById("maneki-neko").setAttribute("src", "maneki-neko.gif");
    setTimeout(function () {
        document.getElementById("maneki-neko").setAttribute("src", "maneki-neko-still.png");
    }, 500);
};

function concatNum(val) {
    valueString += val;
};

function pushToStack(val) {
    btnSound.play();
    document.getElementById("displayBar").style.backgroundColor = "#B7E4C6";
    var num = val.innerHTML;
    var currentVal = document.getElementById("displayValues");
    var displayBar = document.getElementById("displayBar");
    if (currentVal.innerHTML == "0") {
        valueString = num;
        currentVal.innerHTML = num;
    } else {
        if (currentVal.innerHTML.includes(".") && valueString.length > 1 && num == ".") {
            console.log("There is already a decimal.");
        } 
        else {
            concatNum(num);
            currentVal.innerHTML = valueString;
        }
    }
};

function plusBtn() {
    btnSound.play();
    document.getElementById("displayBar").style.backgroundColor = "#B7E4C6";
    if (document.getElementById("displayValues").innerHTML.charAt(0) == "-" && stack.length < 2) {
        document.getElementById("displayValues").innerHTML = document.getElementById("displayValues").innerHTML.slice(1, document.getElementById("displayValues").innerHTML.length);
        stack[stack.length-1] = Math.abs(stack[stack.length-1]);
    } else {
        var firstNum = stack.pop();
        var secondNum = stack.pop();
        var sum = firstNum + secondNum;
        stack.push(sum);
        document.getElementById("displayValues").innerHTML = sum;
    }
};

function minusBtn() {
    btnSound.play();
    document.getElementById("displayBar").style.backgroundColor = "#B7E4C6";
    if (document.getElementById("displayValues").innerHTML.charAt(0) != "-" && stack.length < 2) {
        document.getElementById("displayValues").innerHTML = "-" + document.getElementById("displayValues").innerHTML;
        stack[stack.length-1] = -(stack[stack.length-1]);
    } else {
        var firstNum = stack.pop();
        var secondNum = stack.pop();
        var diff = secondNum - firstNum;
        stack.push(diff);
        document.getElementById("displayValues").innerHTML = diff;
    }
};

function multBtn() {
    btnSound.play();
    document.getElementById("displayBar").style.backgroundColor = "#B7E4C6";
    var firstNum = stack.pop();
    var secondNum = stack.pop();
    var product = firstNum * secondNum;
    stack.push(product);
    document.getElementById("displayValues").innerHTML = product;
};

function divBtn() {
    btnSound.play();
    document.getElementById("displayBar").style.backgroundColor = "#B7E4C6";
    var firstNum = stack.pop();
    var secondNum = stack.pop();
    var quotient = secondNum/firstNum;
    stack.push(quotient);
    document.getElementById("displayValues").innerHTML = quotient;
};

function clearAll() {
    meowSound.play();
    var currentVal = document.getElementById("displayValues");
    currentVal.innerHTML = "0";
    stack = [];
    document.getElementById("displayBar").style.backgroundColor = "#efefef";
};

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.playbackRate = 3;
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
};