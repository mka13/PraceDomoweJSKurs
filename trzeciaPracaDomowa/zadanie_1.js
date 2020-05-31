/*
    1. Osadź skrypt w pliku index.html
    
    2. Pobierz element body i wstaw w niego HTML :
    
    <article>
        <header>
            <h3>Tytuł</h3>
        </header>
        Treść
        <footer>
            Stopka
        </footer>
    </article>
*/


// (function (){
// const element = document.body;
// const html="<article><header><h3>Tytuł</h3></header>Treść<footer>Stopka</footer></article>"
// element.innerHTML=html;
// }
// ()
// );

(function (){
const artykul = document.createElement("article");
document.body.appendChild(artykul);
const naglowek = document.createElement("header");
naglowek.innerHTML = "<h3>Tytuł</h3>Treść";
artykul.appendChild(naglowek);
const stopka= document.createElement("footer");
stopka.innerHTML="Stopka";
artykul.appendChild(stopka);
}());