# Objects       

Write a function that gets 3 arguments: an array, a first name and a last name       
function addUser(myArr, firstName, lastName) { ... }       
       
The function should create an object, with 2 properties: first name and last name       
It should than add the new user object to the array and return the new array       
The original array **should not be changed**       

**Example:**       
```
const users = []
const newUsers = addUser(users, 'Cersei', 'Lannister')
newUsers[0].firstName === 'Cersei'       // true
```

