function play0() {
    var audio = document.getElementById("audio0");
    audio.play();
}
function play1() {
    var audio = document.getElementById("audio1");
    audio.play();
}
function play4() {
    var audio = document.getElementById("audio4");
    audio.play();
}
var str = "ABCD";
var x = Math.floor(Math.random() * 3);
var answers2 = []
var correctans2 = [];
for (var y = 0; y < 5; y++) {
    answers2.push(str[x]);
    x = Math.floor(Math.random() * 3);
}
for (var z = 0; z < 5; z++) {
    if (answers2[z] === 'A')
        correctans2[z] = 0;
    else if (answers2[z] === 'B')
        correctans2[z] = 1;
    else if (answers2[z] === 'C')
        correctans2[z] = 2;
    else if (answers2[z] === 'D')
        correctans2[z] = 3;
}
list3 = [93, 86, 79, 72, 65];
document.getElementById("Cquest1" + correctans2[0]).innerText = list3[0];
document.getElementById("Cquest2" + correctans2[1]).innerText = list3[1];
document.getElementById("Cquest3" + correctans2[2]).innerText = list3[2];
document.getElementById("Cquest4" + correctans2[3]).innerText = list3[3];
document.getElementById("Cquest5" + correctans2[4]).innerText = list3[4];
temp = [94, 88, 78, 63, 87, 85, 77, 82, 91, 84, 70, 66, 92, 71, 64];
var k = 1;
while (k <= 5) {
    var i = 0;
    var j = Math.floor(Math.random() * 15);
    while (i < 4) {
        if (i == correctans2[k - 1]) i++;
        document.getElementById("Cquest" + k + i).innerText = temp[j];
        j = (j + 1) % 15;
        i++;
    }
    k++;
}
tot = answers2.length;

function getCheckedValue(radioName) {
    var radios = document.getElementsByName(radioName);
    for (var y = 0; y < radios.length; y++)
        if (radios[y].checked) return radios[y].value;
}
function getScore() {
    var score = 0;
    for (var i = 0; i < tot; i++)
        if (getCheckedValue("question" + i) === answers2[i]) score += 1;
    return score;
}
function returnScore() {
    document.getElementById("Cmyresults").innerHTML =
        "Your score is " + getScore()+ "/" + tot;
    if (getScore() > 2) {
        console.log("Bravo");
    }
}