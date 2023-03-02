window.addEventListener("load", init)

function init() {
    console.log("Helló!");
    const articleElem = document.querySelectorAll("#tarolo");
    console.log(articleElem)
    articleElem[0].innerHTML += "<h1>Legjobb dolgok</h1>";

    const list = [
        {
            nev: "Maja",
            mondat: "Végre meg tudtam akadályozni, hogy a kutya hátraszökjön a kertbe"
        },
        {
            nev: "Szandi",
            mondat: "Tudtam ültetni és van két virágom"
        },
        {
            nev: "Arnold",
            mondat: "Lebetegedtem"
        },
        {
            nev: "Benedek",
            mondat: "Tegnapi adatbázis-kezelés"
        },
        {
            nev: "Bálint",
            mondat: "Kupcsik tanárnő vicces"
        },
        {
            nev: "Balazs",
            mondat: "Sikerült Csolti Péteres feladatot teljesen megcsinálni!"
        },
        {
            nev:"Ernő",
            mondat:"Tegnap kialaudtam magam,"
        },
        {
            nev: "Trapi",
            mondat: "Sikerült a Feast 1 teszt!"
        }
    ];

    /**
     * JS objektum az összetartozó adatokat  egyben tudjuk kezelni
     * kulcs: ertek
     */
    /* const lista = {
        nev: "Maja",
        mondat: "Végre meg tudtam akadályozni, hogy a kutya hátraszökjön a kertbe"
    };
    const adat2 = {
        nev: "Szandi",
        mondat: "Tudtam ültetni és van két virágom"
    };
    const adat3 = {
        nev: "Arnold",
        mondat: "Lebetegedtem"
    };
    const adat4 = {
        nev: "Benedek",
        mondat: "Tegnapi adatbázis-kezelés"
    };
    const adat5 = {
        nev: "Bálint",
        mondat: "Kupcsik tanárnő vicces"
    };
    const adat6 = {
        nev: "Balazs",
        mondat: "Sikerült Csolti Péteres feladatot teljesen megcsinálni!"
    };
    const adat7 = {
        nev:"Ernő",
        mondat:"Tegnap kialaudtam magam,"
    }
    const adat8 = {
        nev: "Trapi",
        mondat: "Sikerült a Feast 1 teszt!"
    }; */
    /*console.log(adat1)
    console.log(adat1.nev)
    console.log(adat1.mondat)
    adat1.ertekeles = 5;
    console.log(adat1)
    delete adat1.nev
    console.log(adat1)
    console.log(adat1["nev"])*/


    megjelenit(list, articleElem);

    const SzuloElem = document.querySelectorAll("section")
    megjelenit2(list, SzuloElem);
    megjelenit3(list, SzuloElem);

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
        txt += "<li>" + list[index].mondat + "</li>";
        //console.log(list[index]);        
    }
    txt += "</ul>"
    articleElem[0].innerHTML += txt;
    //const articleListak = document.getElementsByClassName(".tarolo")
}

function megjelenit2(list, SzuloElem) {
    let text = "";

    for (let index = 0; index < list.length; index++) {
        text += "<div>" + "<h3>" + list[index].nev + "</h3>"+ "<p>" +list[index].mondat +  "</p>"+ "</div>";
    }
    SzuloElem[0].innerHTML += text;
    
}

function megjelenit3(list, SzuloElem) {
    let table = "<table>";   
    table += "<tr> <th> Név: </th> <th> Mondat: </th></tr>";

    for (let index = 0; index < list.length; index++) {
        table += "<tr>";        
        table += "<td>" + list[index].nev + "</td>"+ "<td>" + list[index].mondat + "</td>";
        table += "</tr>";
    }
    table += "</table>";
    console.log(table)
    SzuloElem[0].innerHTML += table;
    
}