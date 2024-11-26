"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | Flight API
------------------------------------------------------- */
// Passenger Controller:

const Passenger = require('../models/passenger')

module.exports = {
    list: async (req, res) => {
        /* 
            #swagger.tags = ["Passengers"]
            #swagger.summary = "List Passengers"
            #swagger.description = `
                You can send query with endpoint for filter[], search[], sort[], page and limit.
                <ul> Examples:
                    <li>URL/?<b>filter[field1]=value1&filter[field2]=value2</b></li>
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
        */

        // const result = await Passenger.find()
        const result = await res.getModelList(Passenger)

        res.status(200).send({
            error: false,
            details: await res.getModelListDetails(Passenger),
            result

        })
    },

    create: async (req, res) => {
        // $ref: '#/definitions/Passenger'
       
        /* 
            #swagger.tags = ["Passengers"]
            #swagger.summary = "Create Passenger"
            #swagger.parameters['body'] = {
                in:'body',
                required: true,
                schema: {
                    "username": "test",
                    "password": "1234",
                    "email": "test@site.com",
                    "isActive": true,
                    "isStaff": false,
                    "isAdmin": false,
                }
            }
        */
        const result = await Passenger.create(req.body)

        res.status(200).send({
            error: false,
            result
        })

    },

    read: async (req, res) => {
        /* 
            #swagger.tags = ["Passengers"]
            #swagger.summary = "Read Passenger"
        */

        const result = await Passenger.find({ _id: req.params.createdId })

        res.status(200).send({
            error: false,
            details: await res.getModelListDetails({ _id: req.params.createdId }),
            result

        })
    },

    update: async (req, res) => {
        /*
            #swagger.tags = ["Passengers"]
            #swagger.summary = "Update Passenger"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "username": "test",
                    "password": "1234",
                    "email": "test@site.com",
                    "isActive": true,
                    "isStaff": false,
                    "isAdmin": false,
                }
            }
        */

        const result = await Passenger.updateOne({ _id: req.params.createdId }, req.body, { new: true, runValidators: true })

        res.status(202).send({
            error: false,
            result
        })
    },

    deletePassenger: async () => {
        /*
            #swagger.tags = ["Passengers"]
            #swagger.summary = "Delete Passenger"
        */

        const deletedPassenger = await Passenger.deleteOne({ _id: req.params.createdId })

        res.status(deletedPassenger ? 204 : 404).send({
            error: !deletedPassenger
        })
    }
}
