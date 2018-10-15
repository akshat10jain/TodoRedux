export const addTodo=(task)=>{
    return{
        type:'ADD',
        payload:task
    }
}
export const deleteTask=(task_id)=>{
    return{
        type:'DELETE',
        payload:task_id
    }
}
