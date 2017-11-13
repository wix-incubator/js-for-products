function findNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 50) {
            return arr[i]
        }
    }

    return -1
}