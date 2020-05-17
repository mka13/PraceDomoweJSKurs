//zadanie 1

function parzysteSlowa(slowo) {
    let bufor = [];
    for (let i = 0; i < slowo.length; i += 1) {
        if (i % 2 === 0) {
            bufor.push(slowo[i]);
        }
    }
    return bufor;
}

//Zadanie 2

(function tablicaZwierzat() {
    const zwierzęta = [
        "pantera",
        "pirania",
        "łasica"
    ];
    for (let i = 0; i < zwierzęta.length; i += 1) {
        zwierzęta[i] = "Niesamowita " + zwierzęta[i];
    }
    console.log(zwierzęta);
    return zwierzęta;
}());

//Zadanie 3
function generuj(zakres) {
    const alfabet = "abcdefghijklmnopqrstuvwxyz";
    let bufor = '';
    let losowaLitera = '';
    if (zakres > 0) {
        for (let i = 0; i < zakres; i += 1) {
            losowaLitera = alfabet[Math.floor(Math.random() * alfabet.length)];
            bufor = bufor + losowaLitera;
        }
    }
    return bufor;
}


//Zadanie 4
function konwersjaSlowa(slowo) {
    let bufor="";
    for (let i = 0; i < slowo.length; i += 1) {
 
        bufor=bufor + zamianaZnakow(slowo[i]);
    }

    function zamianaZnakow(znak) {
        let bufor = znak.toUpperCase();
        switch (bufor) {
            case "A":
                bufor = '4';
                break;
            case "E":
                bufor = '3';
                break;
            case "I":
                bufor = '1';
                break;
            case "O":
                bufor="0";
                break;
            case "S":
                bufor="2";
            break;
        }
        return bufor;

    }
    return bufor;
}


//Zadanie 5

//klasa
function indexLiter(slowo){
    let listaLiter=[];   
    for(let i=0;i<slowo.length;i+=1){
     if(listaLiter.length===0){
        let litera ={
            wartosc:slowo[i],
            iloscPowtorzen:1
        };
        listaLiter.push(litera);
     } else{      
         let flaga=true;
        for(let x=0;x<listaLiter.length;x+=1)
        {
            if(listaLiter[x].wartosc===slowo[i])
            {
                listaLiter[x].iloscPowtorzen+=1;
                flaga=false;
            }
        }
        if(flaga){
            let litera ={
                wartosc:slowo[i],
                iloscPowtorzen:1
            };
            listaLiter.push(litera);
        }
    }
    }
    return listaLiter;
}

//tablica
function indexLiter2(slowo){
    let listaLiter=[];
    for(let i=0;i<slowo.length;i+=1)
    {
        if(i==0){
            listaLiter.push([slowo[i],1]); 
        }else{
            let flaga=true;
            for(let x=0;x<listaLiter.length;x+=1)
            {
                if(listaLiter[x][0]===slowo[i])
                {
                    listaLiter[x][1]+=1;
                    flaga=false;
                }
            }
            if(flaga){
                listaLiter.push([slowo[i],1]);
            }
        }
    }
return listaLiter;
}