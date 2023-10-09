//var color = "yellow"; //ma viarable color = a la couleur demander pour tout les elements qui ont une variable de nom "color"//
//document.getElementById("bg").style.backgroundColor = color;//
let color = "yellow" //la meme chose que var  let remplace var acctuellement //

function setBgColor() {
    document.getElementById("bg").style.backgroundColor = color;
    document.getElementById("bgcolor").innerHTML = color;
    document.getElementById("bgcolor").style.color = color;
}

