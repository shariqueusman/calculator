function getNumber(num) {
    var result = document.getElementById("result");
    result.value += num;
}

function clearResult() {
    var result = document.getElementById("result");
    result.value = "";
}

function getResult() {
    var result = document.getElementById("result");
    result.value = eval(result.value);
}

function getHalf() {
    var result = document.getElementById('result');
    result.value = result.value / 2;
}

function getSquare() {
    var result = document.getElementById('result');
    result.value = Math.pow(result.value, 2);

}

function getSqrt() {
    var result = document.getElementById("result");
    result.value = Math.sqrt(result.value);
}

function getCube() {
    var result = document.getElementById('result');
    result.value = Math.pow(result.value, 3);

}