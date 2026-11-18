async function getDate(url)
{
    let responce = await fetch(url);
    return await responce.json();
}
let arrayTodo = []
setTimeout(async() => {
    let array = await getDate('https://jsonplaceholder.typicode.com/todos');
    for(let i = 0;i < array.length;i++)
    {
        if(!array[i].completed)
        {
            arrayTodo.push(array[i]);
        }
    }
    for(let i = 0;i < arrayTodo.length;i++)
    {
        console.log(arrayTodo[i]);
    }
}, 0);