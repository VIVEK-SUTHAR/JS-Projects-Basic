let btn = document.getElementById('btn')
let deg = document.getElementById("copy")
function changecolor() {
    var gen, gra1, gra2;
    gen = Math.floor(Math.random() * 16777215).toString(16);
    gra1 = Math.floor(Math.random() * 16777215).toString(16);
    gra2 = Math.floor(Math.random() * 16777215).toString(16);
    // document.querySelector("body").style.backgroundColor = final;
    var FINAL_GRADIENT = `linear-gradient(120deg,#${gra1},#${gra2})`;
    document.querySelector("body").style.background = FINAL_GRADIENT;
    document.getElementById("gradient-css").innerHTML = FINAL_GRADIENT;
    deg.addEventListener('click', copyCSS);
    function copyCSS() {
        navigator.clipboard.writeText(FINAL_GRADIENT)
        document.getElementById("msg").innerHTML = ":) CSS Copied"
    }
}
btn.addEventListener('click', changecolor)