function runMe() {
  const getCurrentUserId = () => new Promise(resolve => {
    setTimeout(() => resolve('D1234'), 1000)
  })

  const getUserData = userId => new Promise((resolve, reject) => {
    console.log(`getUserData called with id: ${userId}`)
    setTimeout(() => {
      if (userId !== 'D1234') {
        reject('incorrect user name')
      } else {
        resolve({
          name: 'Smaug',
          favoriteColor: 'gold',
          city: 'Erebor',
          loves: 'Arkenstone'
        })
      }
    }, 1000)
  })


// TODO getCurrentUserId and getUserData are async functions that return a promise.
// Call getCurrentUserId and pass the result to getUserData. It will return the user data object, than print the user name from the data object

  getCurrentUserId()
    .then(userId => getUserData())
    .then(userData => console.log(userData.name))
}
