"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const express = require("express");
const app = express();

require('express-async-error')

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// Parse json data:
app.use(express.json())

app.all('/', (req, res) => {
    res.send('WELCOME TO TODO API')
})


//Routes

app.use('./src/routes')
/*-----------------------------*/




/*------------------------------------*/

//Routes
// const router = express.Router()










// // Update Todo
// router.put('/todo/:id', async (req, res) => {
//     const { id } = req.params;
//     const [updated] = await Todo.update(req.body, {
//         where: { id }
//     });

//     if (updated) {
//         const updatedTodo = await Todo.findByPk(id);
//         res.status(202).send({
//             error: false,
//             result: updatedTodo,
//         });
//     } else {
//         res.status(404).send({
//             error: true,
//             message: 'Todo not found',
//         });
//     }
// });

// // Delete Todo
// router.delete('/todo/:id', async (req, res) => {
//     const { id } = req.params;
//     const deleted = await Todo.destroy({
//         where: { id }
//     });

//     if (deleted) {
//         res.status(204).send();
//     } else {
//         res.status(404).send({
//             error: true,
//             message: 'Todo not found',
//         });
//     }
// });
const router = require('./src/routes/todo')
app.use(router)
// const errorHandler = require('./src/middlewares/errorHandler')
// app.use(errorHandler)
app.use(require('./src/middlewares/errorHandler'))
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));