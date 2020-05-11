const CITY_SPEED_LIMIT=50;
const TWO_LANE_EXPRESSWAY_SPEED_LIMIT=120;
const HIGHWAY_SPEED_LIMIT=140;
let speed=49;
let typeOfRoad='city';
if(typeOfRoad=='city' && speed<CITY_SPEED_LIMIT){
console.log('Miasto: jedziesz prawidłowo');
}else if(typeOfRoad=='city' && speed>CITY_SPEED_LIMIT){
    console.log('Miasto: przekroczyles predkosc');
}

if(typeOfRoad=='expressway' && speed<TWO_LANE_EXPRESSWAY_SPEED_LIMIT){
    console.log('Eska: jedziesz prawidlowo');
    }else if(typeOfRoad=='expressway' && speed>TWO_LANE_EXPRESSWAY_SPEED_LIMIT){
        console.log('Eska: przekroczyles prędkość');
    }

    if(typeOfRoad=='highway' && speed<HIGHWAY_SPEED_LIMIT){
        console.log('Autostrada: jedziesz prawidlowo');
        }else if(typeOfRoad=='highway' && speed>HIGHWAY_SPEED_LIMIT){
            console.log('autostrada: przekroczyles prędkość');
        }

console.log('---------------');

        switch(typeOfRoad){
            case 'city':
            speed<CITY_SPEED_LIMIT?console.log('Miasto: jedziesz prawidłowo'):console.log('Miasto: przekroczyles predkosc');
            break;
            case 'expressway':
             speed<TWO_LANE_EXPRESSWAY_SPEED_LIMIT?console.log('Eska: jedziesz prawidlowo'):console.log('Eska: przekroczyles prędkość');
             break;
             case 'highway':
                 speed<HIGHWAY_SPEED_LIMIT?console.log('Autostrada: jedziesz prawidlowo'):console.log('autostrada: przekroczyles prędkość');
                 break;
        }