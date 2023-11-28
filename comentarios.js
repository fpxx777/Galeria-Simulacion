function publicar(){
    var temp = document.getElementById("a").value;
    document.getElementById("all-coments"). innerHTML += `<h3>${temp}</h3>`
    document.getElementById("a").value = ""
}