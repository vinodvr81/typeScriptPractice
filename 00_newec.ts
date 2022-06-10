// example typescript network request

import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then(response=>{
    const t = response.data;

    console.log(`
    The id is : ${t.id}
    The title is: ${t.title}
    The user id is: ${t.userId}
    `)
})