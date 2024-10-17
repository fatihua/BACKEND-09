"use strict"

/* -------------------------------------- */
// require('./modules/index.js')
// require('./modules/index')
// require('./modules') // dosya adının index olması dolayısıyla

/*-----------------------------------*/

// const test = require('./modules/index')
// test()


/*--------------------------------*/
// const arrFunc = require("./modules/index")
// arrFunc[0]()
// arrFunc[1]()
// arrFunc[2]()


/*----------------------------------*/
// const [test1, test2, test3] = require("./modules/index")
 // destruction
// test1()
// test2()
// test3()


/*------------------------------------------*/
// const objFunc = require("./modules/index")

// objFunc.test1()
// objFunc.test2()
// objFunc.test3()
/********************************    */

const {test2, test3, test1, name} = require("./modules/index")

test1()
test2()
test3()
console.log(name);

console.log("this is a module js");