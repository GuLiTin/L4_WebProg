function getCommentSort(Posts)
{
    fetch('https://jsonplaceholder.typicode.com/comments').then(responce => responce.json()).then(json => {Posts(json)});
}
getCommentSort((array) => {
    for(let i = 0;i < array.length;i++)
    {
        for(let j = 0;j < array.length - 1 - i;j++)
        {
            if(array[j].name.length < array[j + 1].name.length)
            {
                let t = array[j];
                array[j] = array[j + 1];
                array[j + 1] = t;
            }
        }
    }
    for(let i = 0;i < array.length;i++)
    {
        console.log(mass[i]);
    }
})