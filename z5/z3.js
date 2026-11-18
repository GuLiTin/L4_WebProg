async function getDate(url)
{
    let responce = await fetch(url);
    return await responce.json();
}
let arrayUsers = []
setTimeout(async() => {
    let array = await getDate('https://jsonplaceholder.typicode.com/users');
    for(let i = 0;i < array.length;i++)
    {
        arrayUsers.push([array[i].id, array[i].name, array[i].username, array[i].email, array[i].phone]);
    }
    for(let i = 0;i < array.length;i++)
    {
        console.log(arrayUsers[i]);
    }
}, 0);