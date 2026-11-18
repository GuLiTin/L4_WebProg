let arrayTodo = []
new Promise((solution) => {
    fetch('https://jsonplaceholder.typicode.com/todos').then(responce => responce.json()).then(json => {solution(json)});
})
.then(array => {
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
})