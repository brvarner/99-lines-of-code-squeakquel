let btn = document.getElementById("sing-button");

let friendsAppear = function () {

let friendA = document.createElement("div");
let friendB = document.createElement("div");
let friendC = document.createElement("div");
let friendD = document.createElement("div");
let friendE = document.createElement("div");

friendA.className = "friend";
friendB.className = "friend";
friendC.className = "friend";
friendD.className = "friend";
friendE.className = "friend";

friendA.id = "Richard";
friendB.id = "Resha";
friendC.id = "Sofi";
friendD.id = "Mel";
friendE.id = "Nicole";

let richard = document.createElement("h3");
let richardText = document.createTextNode("Richard");
richard.appendChild(richardText);
friendA.appendChild(richard);
document.body.appendChild(friendA);

let resha = document.createElement("h3");
let reshaText = document.createTextNode("Resha");
resha.appendChild(reshaText);
friendB.appendChild(resha);
document.body.appendChild(friendB);

let sofi = document.createElement("h3");
let sofiText = document.createTextNode("Sofi");
sofi.appendChild(sofiText);
friendC.appendChild(sofi);
document.body.appendChild(friendC);

let mel = document.createElement("h3");
let melText = document.createTextNode("Mel");
mel.appendChild(melText);
friendD.appendChild(mel);
document.body.appendChild(friendD);

let nicole = document.createElement("h3");
let nicoleText = document.createTextNode("Nicole");
nicole.appendChild(nicoleText);
friendE.appendChild(nicole);
document.body.appendChild(friendE);

// I've styled each div to appear in a vertical alignment
friendA.style.display = "block";
friendB.style.display = "block";
friendC.style.display = "block";
friendD.style.display = "block";
friendE.style.display = "block";

let friendDivs = [friendA, friendB, friendC, friendD, friendE]


for (i = 0; i < friendDivs.length; i ++){
        for (count = 99; count >= 1; count--) {
            let lines = document.createElement("p")
            if (count == 2) {
                lines.textContent = "2 lines of code in the file, 2 lines of code; " + friendDivs[i].id + " strikes one out, clears it all out, 1 more line of code in the file."
            } else if (count == 1){
                lines.textContent = "1 line of code in the file, 1 line of code; " + friendDivs[i].id + " strikes one out, clears it all out, no more lines of code in the file."
            } else {
                lines.textContent = count + " lines of code in the file, " + count + " lines of code; " + friendDivs[i].id + " strikes one out, clears it all out, " + (count - 1) + " lines of code in the file."
            };
            friendDivs[i].appendChild(lines)
        };
    }
};

btn.addEventListener("click", friendsAppear);

