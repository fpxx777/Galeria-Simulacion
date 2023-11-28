function publicar(){
    var temp = document.getElementById("a").value;
    document.getElementById("all-coments"). innerHTML += `<h3>${temp}</h3>`
    document.getElementById("a").value = ""
}
function star(element){
    var content = document.getElementById("start-content");
    var noSelectStar = '<button onclick="star(this)" class="star">✰</button>';
    var startSelect = '<button onclick="star(this)" class="star">★</button>';
    if(element == content.children[0]){
        content.innerHTML = startSelect + noSelectStar + noSelectStar + noSelectStar + noSelectStar;
    }
    if(element == content.children[1]){
        content.innerHTML = startSelect + startSelect + noSelectStar + noSelectStar + noSelectStar;
    }
    if(element == content.children[2]){
        content.innerHTML = startSelect + startSelect + startSelect + noSelectStar + noSelectStar;
    }
    if(element == content.children[3]){
        content.innerHTML = startSelect + startSelect + startSelect + startSelect + noSelectStar;
    }
    if(element == content.children[4]){
        content.innerHTML = startSelect + startSelect + startSelect + startSelect + startSelect;
    }
}