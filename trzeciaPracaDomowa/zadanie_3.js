/*
    Po wykonaniu zadania_2 podepnij pod kazdy element footer nasłuchiwanie 
    na wydarzenie click, ktore wykona akcje otworzenia okna alert z wypisaną
    data zawartą w footer
*/




(function(){
[...document.querySelectorAll(".posts footer")].forEach(x=>x.addEventListener("click",function (event){alert(event.target.innerHTML),false}));

}())