function limity(min,max,value){
    return Math.max(min,Math.min(max,value));
}
console.log (limity(3,7,5));

const slowa=['javascript','java','vba'];
let slowo = slowa[Math.floor(Math.random()*slowa.length)];
let iloscProb=0;
let flag=true;
let zgadywanaWartosc='';
for(let i=0;i<slowo.length;i+=1){
    zgadywanaWartosc+='_';
}
console.log(slowo);

while(flag){
       let litera=prompt('Podaj jedną literę \n' + zgadywanaWartosc);
    let index=slowo.indexOf(litera);
    if(litera.length==1 && index!=-1 )
    {   let bufor='';
        for(let i=0;i<zgadywanaWartosc.length;i++)
        {
            if(litera===slowo[i])
            {
                bufor= bufor+slowo[i];
            }else{
                bufor=bufor+zgadywanaWartosc[i];
            }
        }
        zgadywanaWartosc=bufor;
        if(zgadywanaWartosc===slowo){
            alert('Wygrana');
            flag=false;
        }
    }else{
        iloscProb+=1;
        alert('Błąd zostało : ' + (5-iloscProb) + ' prob' );
        if(iloscProb==5){
            alert('Przekroczyles ilosc prob');
            flag=false;
        }
    }
}