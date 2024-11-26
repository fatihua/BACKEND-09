"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | Flight API
------------------------------------------------------- */

const { mongoose } = require('../configs/dbConnection')
const {User} = require('../models/user')


/* ------------------------------------------------------- */

// Passanger Model:
const PassengerSchema = new mongoose.Schema({

    firstName: {
        type: String,
        trim: true,
        required: true,
    },

    lastName: {
        type: String,
        trim: true,
        required: true
    },

    gender: {
        type: String,
        trim: true,
        required: true
    },

    email: {
        type: String,
        trim: true,
        required: [true, 'Email field must be filled.'],
        // unique: [true, 'This email has been taken already.'],
        validate: [
            (email) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email),
            "Please fill a valid email address",
        ],
    },

    createdId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
        // required: true
    }

}, {
    collection: 'passengers',
    timestamps: true
})

/* ------------------------------------------------------- */
module.exports = mongoose.model('Passenger', PassengerSchema)