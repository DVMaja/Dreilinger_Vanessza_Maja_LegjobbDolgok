window.addEventListener("load", init)

function init() {
    console.log("Helló!");
    const articleElem = document.querySelectorAll("#tarolo");
    console.log(articleElem)
    articleElem[0].innerHTML += "<h1>Legjobb dolgok</h1>";

    const list = ["Végre meg tudtam akadályozni, hogy a kutya hátraszökjön a kertbe",
        "Tudtam ültetni és van két virágom",
        "Lebetegedtem", "Tegnapi adatbázis-kezelés",
        "Kupcsik tanárnő vicces", "Tegnap kialaudtam magam",
        "Sikerült Csolti Péteres feladatot teljesen megcsinálni! ",
        "Jó edzés volt a héten!",];

    megjelenit(list, articleElem);

    const SzuloElem = document.querySelectorAll("section")
    megjelenit2(list, SzuloElem);

}
const articleElem = document.getElementById("tarolo");
const articleListak = document.getElementsByClassName("classnev");
console.log(articleListak)

const articleListak2 = document.querySelectorAll(".classnev");
console.log(articleListak2)

const articleListak3 = document.querySelector("article");
console.log(articleListak3)

const articleListak4 = document.querySelectorAll("article");
console.log(articleListak4)

function megjelenit(list, articleElem) {
    let txt = "<ul>";    
    for (let index = 0; index < list.length; index++) {
        txt += "<li>" + list[index] + "</li>";
        //console.log(list[index]);        
    }
    txt += "</ul>"
    articleElem[0].innerHTML += txt;
    //const articleListak = document.getElementsByClassName(".tarolo")
}

function megjelenit2(list, SzuloElem) {
    let text = "";

    for (let index = 0; index < list.length; index++) {
        text += "<div>" + "<p>" +list[index] +  "</p>"+ "</div>";
    }
    SzuloElem[0].innerHTML += text;

    
}