const jwt = require('jsonwebtoken');

const mysql = require('../utils/mysql')

const redis = require('../utils/redis')

const userDetails = [
    {
        id: 1,
        name: "Feroz"
    },
    {
        id: 2,
        name: "Anil"
    },
    {
        id: 3,
        name: "Hasa"
    }
]

class User {

    getUsers() {
        return userDetails
    }

    getUserById(id) {
        //Gets the user record based on id
        let user = userDetails.filter(x => x.id == id)
        return user

    }

    getUserByName(name) {

        //gets the user records based on name
        let user = userDetails.filter(x => x.name.toLowerCase() === name.toLowerCase())
        return user
    }

    getUsersCount() {
        //gets total no of users
        return {
            users: userDetails.length
        }
    }

    addNewUser(data) {
        //Adds a new user
        userDetails.push(data)
        return userDetails
    }

    async getToken() {

        let tokenData = {
            "name": "Ashish",
            "college": "VJIT",
            "role": "student"
        }

        let token = jwt.sign(tokenData, process.env.JWT_SIGN_KEY, {expiresIn: 10})

        return token

    }

    async getUsers(count) {
        try {

            let cached_users = await new Promise((resv,rej) => {
                redis.get("users", (err, reply) => {
                  resv(reply);
                });
            })

            if(cached_users) {
                return JSON.parse(cached_users)
            } else {
                let users = await new Promise((resolve, reject) => {
                    mysql.query('select first_name, email from users limit 10', [Number(count)], (err, result) => {
                        if(err) {
                            console.log(err)
                            reject(err)
                        } else {
                            resolve(result)
                        }

                    })
                })

                redis.SETEX("users", 30, JSON.stringify(users), (err, reply) => {
                    if(err) throw err;
                })

                return users
            }

        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = User