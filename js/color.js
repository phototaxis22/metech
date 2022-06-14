


const colors = ["赤","青","緑"];

Math.floor(Math.random() * colors.length);

const pick = document.getElementById("pick");
const disp = document.getElementById("result");

pick.addEventListener("click", function() {
    const num = Math.floor(Math.random() * colors.length);
    disp.innerHTML = colors[num];
});