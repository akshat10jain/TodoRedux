let todoId=0;

export const addTodo=(task)=>{
    return{
        type:'ADD',
        id:todoId++,
        payload:task
    }
}
export const deleteTask=(task_id)=>{
    return{
        type:'DELETE',
        payload:task_id
    }
}
