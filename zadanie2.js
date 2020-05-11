checkSpeed(200,'expressway');



function checkSpeed (speed,typeOfRoad='city'){
    
    const CITY_SPEED_LIMIT=50;
    const TWO_LANE_EXPRESSWAY_SPEED_LIMIT=120;
    const HIGHWAY_SPEED_LIMIT=140;
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
}

