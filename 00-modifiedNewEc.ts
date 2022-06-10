// example typescript network request

import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo{
    id:number,
    title:string,
    userId:string,
    completed:boolean
}

axios.get(url).then(response=>{
    const t = response.data as Todo;

    willTodo(t.id,t.title,t.userId,t.completed)
})

const willTodo = (id:number, title:string,userId:string,completed:boolean)=>{
    console.log(`
    The id is : ${id}
    The title is: ${title}
    The user id is: ${userId}
    Whether it is completed or not: ${completed}
    `)

}