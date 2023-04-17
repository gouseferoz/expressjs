
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

}

module.exports = User