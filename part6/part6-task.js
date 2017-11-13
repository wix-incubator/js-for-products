const myArr = [{
    firstName: 'Freak',
    lastName: 'Azoid'
}]

function addUser(arr, firstName, lastName) {
    // TODO create a user object.
    // TODO return a new array with the new user in it
}

const newArr = addUser(myArr, 'Cersei', 'Lannister')
console.log('Number of users: ', newArr.length)             // should be 2
console.log('New user name:', newArr[1].firstName)          //should be Cersei
console.log('Did change the original? ', newArr === arr)    //should be false

// TODO try to add another user