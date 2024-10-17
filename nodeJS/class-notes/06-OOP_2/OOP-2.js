'use strict'

/*
    OOP Classes
*/

//? Class Expression
/*
const PascalCaseName=class{
    ...
}
*/
//? Class Declaration (tercih edeceğimiz)
/*
class PascalCaseName {
    // propertyName // değer vermek zorunda değil undefined
    propertyName = "value"
    //method başına function yazılmaz
    
    methodName(){
        return 'this is a method'
    }
}

// class'tan bir object üretilirse ismi = instance olarak nitelenir
const NewInstance = new PascalCaseName() //yeni instance üretme
console.log(NewInstance);
console.log(NewInstance.methodName());

*/

//* CONSTRUCTOR

/*

class Car{

    isRunning = false
    //brand='noname'

    constructor(brand='noname',model,year){
        this.brand=brand
        this.model=model
        this.year=year
    }

    runEngine(){
        this.isRunning=true
        return this.isRunning
    }
}

const Opel = new Car ('Opel', 'Corsa', '2020')
console.log(Opel);
console.log(Opel.runEngine());

const Mercedes = new Car ('Mercedes', 'E200', '2023')
console.log(Mercedes);
console.log(Mercedes.runEngine());

*/


//? Inheritance = Miras Alma
//Başka bir class'ın sahip olduğu özellikleri alıyor + kendi sahip oldukları
/*

class Vehicle {
    isActive = false
    setCount=5
    constructor(vehicleType){
        this.vehicleType = vehicleType
    }
}

class Car extends Vehicle{

    isRunning = false
    
    //setCount=5
    //brand='noname'

    constructor(brand='noname',model,year,vehicleType){
        super(vehicleType)
        this.brand=brand
        this.model=model
        this.year=year
    }

    runEngine(){
        this.isRunning=true
        return this.isRunning
    }
}

const Mercedes = new Car ('Mercedes', 'E200', '2023','Car')
// console.log(Mercedes);
// console.log(Mercedes.runEngine());


class Track extends Vehicle{

    isRunning = false
    maxCapacity
    //brand='noname'

    constructor(brand='noname',model,year,vehicleType){
        super(vehicleType)
        this.brand=brand
        this.model=model
        this.year=year
    }

    runEngine(){
        this.isRunning=true
        return this.isRunning
    }
}

class Accessory extends Car {
    constructor(accessoryName,brand,model,year,vehicleType){
        super(brand,model,year,vehicleType)
        this.accessoryName=accessoryName
    }
}
const Seat = new Accessory('Leather','Audi','Q8',2000,'Car')
console.log(Seat);

*/

//?POLYMORPHISM
//override
//overload js desteklemez
/*
class Vehicle {
    isActive = false
    setCount=5
    hp
    constructor(vehicleType){
        this.vehicleType = vehicleType
    }
    getDetail(){
        console.log('this detail is about vehicle');
    }
}
const newVehicle = new Vehicle ('Bus')
console.log(newVehicle.getDetail());

class Car extends Vehicle{

    isRunning = false
    
    //setCount=5
    //brand='noname'

    constructor(brand='noname',model,year,vehicleType){
        super(vehicleType)
        this.brand=brand
        this.model=model
        this.year=year
    }

    runEngine(){
        this.isRunning=true
        return this.isRunning
    }

    //Overload
    getDetail(){ // parent class'taki fonksiyon override edildi
        console.log('this detail is about car');
    }
    getDetail(x){ // parent class'taki fonksiyon override edildi
        console.log(x);
    }
}

const Mercedes = new Car ('Mercedes', 'E200', '2023','Car')
console.log(Mercedes.getDetail());
console.log(Mercedes.getDetail('test'));
*/

//? access modifier
//?ENCAPSULATION
//?Public       Parent=yes, Child=yes, Instance=yes
//?#Private     Parent=yes, Child=no, Instance=no
//?_Protected   Parent=yes, Child=yes, Instance=no //!!! protected JS desteklemez

/*
class Vehicle{
    publicProp='this is public property'
    #privateProp='this is a PRIVATE property'
    _protectedProp='this is a PROTECTED property'

    isActive=false
    seatCount=5
    hp
    constructor(vehicleType){
        this.vehicleType=vehicleType
    }
    getDetail(){
        console.log(this.publicProp);
        console.log(this.#privateProp);
        console.log(this._protectedProp);
    }
}
const newVehicle=new Vehicle('Bus')
console.log(newVehicle.getDetail());
class Car extends Vehicle {
    isRunning=false
    // brand='noname'
    constructor(brand='noname',model,year=1900,vehicleType){
       super(vehicleType)
       this.brand=brand
       this.model=model
       this.year=year
    }
    runEngine(){
        this.isRunning=true
        return this.isRunning
    }
    getDetail(){
        console.log(this.publicProp);
        // console.log(this.#privateProp); // sadece vehicle'de kullanılabilir
        console.log(this._protectedProp);
    }
}
const Mercedes =new Car('Mercedes','E200',2023,'Car')
    console.log(Mercedes.publicProp);
    // console.log(Mercedes.#privateProp);
    console.log(Mercedes._protectedProp);  // protected JS desteklemez, normalde bu satır hata vermeliydi
//! eğer bir property / variable _ ile başlıyor ise yani protected ise ona dokunma
//! eğer bir değişken tamamen büyük harflerden oluşuyorsa CONST yani sabittir 'değiştirme' demektir.
 

*/

//? GETTER & SETTER methods
//? STATIC keyword classından erişilebilir, instance'dan erişilmez

class Car {
    
    isRunning=false
    #price=1000       
    constructor(brand='noname',model,year=1900){
       this.brand=brand
       this.model=model
       this.year=year 
    }
    runEngine(){
        this.isRunning=true
        return this.isRunning
    }
    // getPrice(){
    //     return this.#price
    // }
    get getPrice(){
        return this.#price
    }
    set setPrice(price){ // get ve set ifadeli metodlar property gibi işlem görür.
        this.#price=price
        // return this.#price    
    }
    static staticProp = "static değer"
    static staticMethod(){
        return "this is a static method"
    }
}
const Mercedes =new Car('Mersedes','E200',2023)
// console.log(Mercedes.getPrice());
// console.log(Mercedes.getPrice);
// console.log(Mercedes.setPrice(2000)); //! get ve set ifadeli metodlar property gibi işlem görür.
// console.log(Mercedes.setPrice=2000);

// console.log(Mercedes.staticProp); // undefined döndü
console.log(Car.staticProp); // değerini döndürdü
console.log(Car.staticMethod()); // değerini döndürdü