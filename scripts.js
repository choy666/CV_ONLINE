//valor del checkbox
let valorInputCheck = document.getElementById("input_Checkbox").value;
// oyente cambia valor de checkbox
document.getElementById("input_Checkbox").addEventListener("click",function(){
    cambioValorCheck(valorInputCheck);
    comprueboCheckbox(valorInputCheck);
})

function comprueboCheckbox(_valorCheck){
    const collectionTituloCard = document.getElementsByClassName("titulo_card");
    if (_valorCheck == "light"){
        //  colores claros
        document.getElementById("up").style.backgroundColor = "white";
        document.getElementById("header").style.backgroundColor = "white";
        document.getElementById("header").style.boxShadow = "20px 20px 60px #bebebe, -20px -20px 60px #ffffff";
        document.getElementById("check_text").style.color = "black";
        document.getElementById("titulo").style.color = "black";
        document.getElementById("main").style.backgroundColor = "white";
        document.getElementById("card_personal").style.boxShadow = "20px 20px 60px #bebebe, -20px -20px 60px #ffffff";
        document.getElementById("down").style.backgroundColor = "white";
        document.getElementById("footer").style.boxShadow = "20px 20px 60px #888888, -20px -20px 60px hsl(0, 0%, 60%)";
        for (let i = 0; i < collectionTituloCard.length; i++) {
            collectionTituloCard[i].style.color = "black";
        }
    }
    else if (_valorCheck == "darck"){
        // colores oscuros
        document.getElementById("up").style.backgroundColor = "black";
        document.getElementById("header").style.backgroundColor = "black";
        document.getElementById("header").style.boxShadow = "15px 15px 30px rgb(60, 60, 60), -15px -15px 30px rgb(60, 60, 60)";
        document.getElementById("check_text").style.color = "white";
        document.getElementById("titulo").style.color = "white";
        document.getElementById("main").style.backgroundColor = "black";
        document.getElementById("card_personal").style.boxShadow = "15px 15px 30px rgb(60, 60, 60), -15px -15px 30px rgb(60, 60, 60)";
        document.getElementById("down").style.backgroundColor = "black";
        document.getElementById("footer").style.boxShadow = "15px 15px 30px rgb(60, 60, 60), -15px -15px 30px rgb(60, 60, 60)";
        for (let i = 0; i < collectionTituloCard.length; i++) {
            collectionTituloCard[i].style.color = "white";
        }
    }
}
function cambioValorCheck(_valorCheck){
    if (valorInputCheck == "light"){
        valorInputCheck = "darck";
    }
    else if (valorInputCheck == "darck"){
        valorInputCheck = "light";
    }
}