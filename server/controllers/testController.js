let todoArr = [] 
let id = 0

exports.addTodo = (req, res) =>{
    console.log(req.query)
    if(req.query.text != ""){
        todoArr.push({text: req.query.text, id:id})
        id = id + 1
    }
    let jsonArr = JSON.stringify(todoArr)
    console.log(jsonArr)
    res.send(jsonArr)
}

exports.deleteTodo = (req, res) =>{
    let todoId = parseInt(req.query.id);
    todoArr = todoArr.filter(todo => todo.id != todoId)
    console.log(todoArr)
    res.send(req.query.id)
}
