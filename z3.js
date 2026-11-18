let arrayUsers = []
new Promise((solution) => {
    fetch('https://jsonplaceholder.typicode.com/users').then(responce => responce.json()).then(json => {solution(json)});
})
.then(array => {
    for(let i = 0;i < array.length;i++)
    {
        arrayUsers.push([array[i].id, array[i].name, array[i].username, array[i].email, array[i].phone]);
    }
    for(let i = 0;i < arrayUsers.length;i++)
    {
        console.log(arrayUsers[i]);
    }
})