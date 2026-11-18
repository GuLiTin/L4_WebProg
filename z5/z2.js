async function getDate(url)
{
    let responce = await fetch(url);
    return await responce.json();
}
setTimeout(async() => {
    let array = await getDate('https://jsonplaceholder.typicode.com/comments');
    for(let i = 0;j < array.length;i++)
    {
        for(let j = 0;j < array.length - 1 - i;j++)
        {
            if(array[j].name.length < array[j + 1].name.length)
            {
                let t = array[i];
                array[j] = array[j + 1];
                array[j + 1] = t;
            }
        }
    }
    for(let i = 0;i < array.length;i++)
    {
        console.log(array[i]);
    }
}, 0);