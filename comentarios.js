var lastStar = null;
var cliclkCora = 0;
function publicar() {
    var coment = document.getElementById("coment").value;
    var user = document.getElementById("name").value;
    if (user == "") { }
    if (coment == "") { }
    else {
        document.getElementById("coments").innerHTML += `<div class="comentario"> <div class="usuario-info"> <p>${user}</p> <div> <p>${star(lastStar)}</p></div></div ><div class="usuario-coment"><p>${coment}</p></div><p onclick="corazao(this)" class="corazao">♥</p></div >`;
        document.getElementById("coment").value = "";
        document.getElementById("name").value = "";
        star(0);
    }

}
function star(element) {
    var content = document.getElementById("start-content");
    var noSelectStar = '<button onclick="star(this)" class="star-no-select">★</button>';
    var startSelect = '<button onclick="star(this)" class="star-select">★</button>';
    if(element == 0){
        content.innerHTML = noSelectStar + noSelectStar + noSelectStar + noSelectStar + noSelectStar;
    }
    if (element == content.children[0]) {
        content.innerHTML = startSelect + noSelectStar + noSelectStar + noSelectStar + noSelectStar;
        lastStar = 0;
    }
    if (element == content.children[1]) {
        content.innerHTML = startSelect + startSelect + noSelectStar + noSelectStar + noSelectStar;
        lastStar = 1;
    }
    if (element == content.children[2]) {
        content.innerHTML = startSelect + startSelect + startSelect + noSelectStar + noSelectStar;
        lastStar = 2;
    }
    if (element == content.children[3]) {
        content.innerHTML = startSelect + startSelect + startSelect + startSelect + noSelectStar;
        lastStar = 3;
    }
    if (element == content.children[4]) {
        content.innerHTML = startSelect + startSelect + startSelect + startSelect + startSelect;
        lastStar = 4;
    }
}
function corazao(element){
    if(cliclkCora == 0){
        element.className = "corazao2"
        cliclkCora = 1;
    }
    else if(cliclkCora == 1){
        element.className = "corazao"
        cliclkCora = 0;
    }
}