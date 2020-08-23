const task={
    task:[{
        text:'grocery shoping',
        completed:true
    },
{
    text:'Clean yard',
    completed:false
},
{
    text:'Film course',
    completed:false
}],
getTaskTodo()
{
    return this.task.filter((task)=> task.completed===false)
}
}



console.log(task.getTaskTodo())