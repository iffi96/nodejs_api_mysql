const pool = require('../config/config');

module.exports = {
    getUsers: callback => {
        pool.query(`select * from users`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        )
    },
    signup: (data, callback) => {
        pool.query(
            `insert into users(email, password)
                values(?, ?)`,
            [
                data.email,
                data.password
            ],
            (error, results) => {
                if (error) {
                    return callback(error)
                }
                return callback(null, results)
            }
        )
    }
}