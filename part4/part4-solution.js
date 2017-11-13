function bartThis(text, times) {
    for (let i = 0; i < times; i++) {
        console.log(text)
    }
}

function findRandom() {
    let result = 1
    let numberOfAttempts = 0

    while (result >= 0.5) {
        result = Math.random()
        numberOfAttempts++
    }

    console.log('Attempts: ', numberOfAttempts)

    return result
}