"use strict"

/*
    OOP
*/

// obje isimlendirmede PascalCase / camelCase 
/*
const sampleObject ={
    //property / attribute / field 
    propertyName : 'value',
    propertyArrat: [],
    propertyObject:{},

    //? function=method
    methodName: function(){
        return "this is a method"
    },
    // or
    methodName2(){
        return "this is a method 2"
    }
}
// object property çağırma
console.log(sampleObject.propertyName);
console.log(sampleObject.methodName2());



// example object

const Car = {
    brand : 'Mercedes',
    model : 'S500',
    year : 2020,
    isAutoGear : true,
    colors:['Blue', 'Black'],
    engine:{
        cylinderCount:8,
        hp:100
    },
    
    startEngine: function(){
        return 'engine started'
    },
    stopEngine: function(){
        return 'engine stopped'
    },

    detailFunction:function(){
        console.log(this);
    }
   
}

// .(dot) notasyonu
console.log(Car.brand);
console.log(Car.colors);
console.log(Car.colors[0]);
console.log(Car.engine);
console.log(Car.engine.hp);
console.log(Car.startEngine());

// alternative

console.log(Car["brand"]);
console.log(Car["colors"][0]);
console.log(Car['stopEngine']());


*/

/*
//? This keyword
//* içinde bulunduğu objeyi ifade eder

const Car = {
    brand : 'Mercedes',
    model : 'S500',
    year : 2020,
    isAutoGear : true,
    colors:['Blue', 'Black'],
    engine:{
        cylinderCount:8,
        hp:100
    },
    
    startEngine: function(){
        return 'engine started'
    },
    stopEngine: function(){
        return 'engine stopped'
    },

    detailFunction:function(){
        // console.log(this);
        // console.log(this.brand);
        return this.brand;
    },

    //! arrow function global scope'tur !!!!!!!!!!!!!!!!!!!!
    arrowMethod:()=>{
        return this.brand;
    }
}

console.log(Car.detailFunction());
console.log(Car.arrowMethod());

*/
//? Array destruction

const sampleArray =["val1", "val2", "val3", "val4", "val5"]

/*
const v1 =sampleArray[0]
const v2 =sampleArray[1]
const v3 =sampleArray[2]
const v4 =sampleArray.slice(2,3)

console.log(v4);
*/

const [v1,v2, ...vOthers] = sampleArray
// rest operatör eşitliğin solunda olacak
console.log(vOthers);

//spread operatör eşitliğin sağı

const newArray = ["valx", ...sampleArray, "valy" ]
console.log(newArray);

//? object destruction

const Car = {
    brand : 'Mercedes',
    model : 'S500',
    year : 2020,
    isAutoGear : true,
    colors:['Blue', 'Black'],
    engine:{
        cylinderCount:8,
        hp:100
    },
    
    startEngine: function(){
        return 'engine started'
    },
    stopEngine: function(){
        return 'engine stopped'
    },

    detailFunction:function(){
        // console.log(this);
        // console.log(this.brand);
        return this.brand;
    }
}

//rest = rest operatörü, bir nesne veya dizi içindeki kalan elemanları veya özellikleri toplayarak yeni bir nesne veya dizi oluşturur.
/*
const {year, brand, model,...others} = Car
console.log(year, brand, model,others);
console.log('************************');
console.log(Car);
*/

/*
const {year, brand:marka, model,...others} = Car
console.log(year, marka, model,others);
console.log("****");
console.log(year, marka, model,Car);

// spread operatör
const newCar = {
    ...Car, 
    oilType:"gas"
}
console.log(newCar);

*/

// OBJ to JSON
const jsonCar = JSON.stringify(Car)
console.log(jsonCar);
console.log(typeof jsonCar);
console.log(typeof Car);


// JSON to OBJ
const objCar = JSON.parse(jsonCar);
console.log(objCar);

//obj to array
const arrayCar = Object.keys(Car);
console.log(arrayCar);

const arrayValues = Object.values(Car);
console.log(arrayValues);

const arrayAll = Object.entries(Car);
console.log(arrayAll);


//Construction
const constructionFunction = function(){
    this.property="value"
}

const carConstruction = function(brand,model,year){
    this.brand = brand,
    this.model = model,
    this.year = year

    this.startEngine=function(param){
        return (param)
    }
}


// new keyword
const newCar1 = new carConstruction("Volkswagen", "passat", 2024)
// console.log(typeof newCar1, newCar1);

newCar1.startEngine("Tesla")
console.log(newCar1.startEngine("Tesla"));

const newCar2 = new carConstruction("Audi", "A4", 2023)
// console.log(typeof newCar2, newCar2);
console.log(newCar2.startEngine("AlfaRomeo")); 