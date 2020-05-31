/*
    Mamy stałą z danymi articles. Wstaw do index.html w body element div
    z class="posts" i do tego elementu wstaw elementy artykułów wypełnione danymi
    z listy wg schematu
    
    <article id="post-TU WPISZ WARTOŚĆ WŁASNOŚCI id">
        <header>
            <h3>TU WPISZ WARTOŚĆ WŁASNOŚCI title</h3>
        </header>
        TU WPISZ WARTOSC text
        <footer>
            TU WPISZ WARTOSC WŁASNOŚCI date
        </footer>
    </article>
*/





(function (){
    const articles = [
        {
            id: 5002,
            title: "Coś być musi za zakrętem",
            text: "Wczoraj nagrałem film na YouTubie, w którym opowiadam o moim doświadczeniu rezygnowania z pracy w szkole publicznej trzy lata temu....",
            date: '27-05-2020'
        }, {
            id: 5000,
            title: "Kolejny sukces odmrażania i trauma dzieci...",
            text: "Wszyscy ręce w górę, przedszkola i szkoły otwarte! Hura!!! Kolejny sukces, odmrażanie… bla bla bla… Tylko, że dziecko wracające do przedszkola dzisiaj przeżywa traumę. TRAUMĘ!!!…",
            date: '25-05-2020'
        }
    ]
const div=document.createElement("div");
div.className="posts";
let artykul;
let naglowek;
let stopka;
articles.forEach(x=>{
   artykul= document.createElement("article");
   artykul.id=x.id;
   naglowek = document.createElement("header");
   naglowek.innerHTML=`<h3>${x.title}</h3>${x.text}`;
   artykul.appendChild(naglowek);
   stopka = document.createElement("footer");
   stopka.innerHTML=x.date;
   artykul.appendChild(stopka);
   div.appendChild(artykul);
})

document.body.appendChild(div);
}());