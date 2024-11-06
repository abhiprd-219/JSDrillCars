
let inventory = [{"id":1,"car_make":"Lincoln","car_model":"Navigator","car_year":2009},
{"id":2,"car_make":"Mazda","car_model":"Miata MX-5","car_year":2001},
{"id":3,"car_make":"Land Rover","car_model":"Defender Ice Edition","car_year":2010},
{"id":4,"car_make":"Honda","car_model":"Accord","car_year":1983},
{"id":5,"car_make":"Mitsubishi","car_model":"Galant","car_year":1990},
{"id":6,"car_make":"Audi","car_model":"riolet","car_year":1995},
{"id":7,"car_make":"Smart","car_model":"Fortwo","car_year":2009},
{"id":8,"car_make":"Audi","car_model":"4000CS Quattro","car_year":1987},
{"id":9,"car_make":"Ford","car_model":"Windstar","car_year":1996},
{"id":10,"car_make":"Mercedes-Benz","car_model":"E-Class","car_year":2000},
{"id":11,"car_make":"Infiniti","car_model":"G35","car_year":2004},
{"id":12,"car_make":"Lotus","car_model":"Esprit","car_year":2004},
{"id":13,"car_make":"Chevrolet","car_model":"Cavalier","car_year":1997},
{"id":14,"car_make":"Dodge","car_model":"Ram Van 1500","car_year":1999},
{"id":15,"car_make":"Dodge","car_model":"Intrepid","car_year":2000},
{"id":16,"car_make":"Mitsubishi","car_model":"Montero Sport","car_year":2001},
{"id":17,"car_make":"Buick","car_model":"Skylark","car_year":1987},
{"id":18,"car_make":"Geo","car_model":"Prizm","car_year":1995},
{"id":19,"car_make":"Oldsmobile","car_model":"Bravada","car_year":1994},
{"id":20,"car_make":"Mazda","car_model":"Familia","car_year":1985},
{"id":21,"car_make":"Chevrolet","car_model":"Express 1500","car_year":2003},
{"id":22,"car_make":"Jeep","car_model":"Wrangler","car_year":1997},
{"id":23,"car_make":"Eagle","car_model":"Talon","car_year":1992},
{"id":24,"car_make":"Toyota","car_model":"MR2","car_year":2003},
{"id":25,"car_make":"BMW","car_model":"525","car_year":2005},
{"id":26,"car_make":"Cadillac","car_model":"Escalade","car_year":2005},
{"id":27,"car_make":"Infiniti","car_model":"Q","car_year":2000},
{"id":28,"car_make":"Suzuki","car_model":"Aerio","car_year":2005},
{"id":29,"car_make":"Mercury","car_model":"Topaz","car_year":1993},
{"id":30,"car_make":"BMW","car_model":"6 Series","car_year":2010},
{"id":31,"car_make":"Pontiac","car_model":"GTO","car_year":1964},
{"id":32,"car_make":"Dodge","car_model":"Ram Van 3500","car_year":1999},
{"id":33,"car_make":"Jeep","car_model":"Wrangler","car_year":2011},
{"id":34,"car_make":"Ford","car_model":"Escort","car_year":1991},
{"id":35,"car_make":"Chrysler","car_model":"300M","car_year":2000},
{"id":36,"car_make":"Volvo","car_model":"XC70","car_year":2003},
{"id":37,"car_make":"Oldsmobile","car_model":"LSS","car_year":1997},
{"id":38,"car_make":"Toyota","car_model":"Camry","car_year":1992},
{"id":39,"car_make":"Ford","car_model":"Econoline E250","car_year":1998},
{"id":40,"car_make":"Lotus","car_model":"Evora","car_year":2012},
{"id":41,"car_make":"Ford","car_model":"Mustang","car_year":1965},
{"id":42,"car_make":"GMC","car_model":"Yukon","car_year":1996},
{"id":43,"car_make":"Mercedes-Benz","car_model":"R-Class","car_year":2009},
{"id":44,"car_make":"Audi","car_model":"Q7","car_year":2012},
{"id":45,"car_make":"Audi","car_model":"TT","car_year":2008},
{"id":46,"car_make":"Oldsmobile","car_model":"Ciera","car_year":1995},
{"id":47,"car_make":"Volkswagen","car_model":"Jetta","car_year":2007},
{"id":48,"car_make":"Dodge","car_model":"Magnum","car_year":2008},
{"id":49,"car_make":"Chrysler","car_model":"Sebring","car_year":1996},
{"id":50,"car_make":"Lincoln","car_model":"Town Car","car_year":1999}];

// ==== Problem #1 ====
// The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:
"Car 33 is a *car year goes here* *car make goes here* *car model goes here*"

function findCarById(id) {
    const car = inventory.find(function(car) {
        return car.id === id;
    });
    if (car) {
        console.log(`Car ${id} is a ${car.car_year} ${car.car_make} ${car.car_model}.`);
    } else {
        console.log(`Car with id ${id} not found.`);
    }
}

findCarById(33);
// Console output is :- Car 33 is a 2011 Jeep Wrangler.

function findLastCar() {
    const lastCar = inventory[inventory.length - 1];
    console.log(`Last car is a ${lastCar.car_make} ${lastCar.car_model}`);
}
findLastCar();
