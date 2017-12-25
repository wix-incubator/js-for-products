# Async code

In this task we will use async functions that return promises.
In the file part7-task.js, there are 2 functions ready for use - **getCurrentUserId** and **getUserData**
Both functions are async, and return a promise object.
getCurrentUserId has no arguments, and returns a promise, that resolves with a user id.
getUserData expects a single argument - userId, and returns a promise that resolves with user information object.
The User information has a "name" property.

Call getCurrentUserId, and when it is resolved, pass the result to getUserData
When getUserData is resolved, print the user name with console.log

