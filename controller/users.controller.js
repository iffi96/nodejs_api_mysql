const pool = require('../config/config');
const { getUsers, signup } = require('../services/services');

module.exports = {
    getUser: (req, res) => {
        getUsers((err, results) => {
            res.json({
                code: 200,
                status: true,
                message: "Success",
                data: results
            })
        })
    },
    signup: (req, res) => {
        console.log(req.body.email)
        signup(req.body, (param, result) => {
            // res.send({ data: "13" })
            if (result?.affectedRows) {
                res.send({
                    code: 200,
                    status: true,
                    message: "Success",
                    data: result
                })
            } else {
                res.send({
                    code: 200,
                    status: false,
                    message: "unseuccess",
                    data: result
                })
            }
        })
    }
}