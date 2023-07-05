
//Making test object 
let todos = [
    {
        _id: "1",
        description: "I have to wake up",
        due_date: "10/20/2924",
        category: "Sleep",
        completed: false
    },
    {
        _id: "2",
        description: "Complete Homework",
        due_date: "10/20/2924",
        category: "School",
        completed: true
    },
    {
        _id: "3",
        description: "Hair cut",
        due_date: "10/20/2924",
        category: "Cleaning",
        completed: false
    },
    {
        _id: "4",
        description: "Diary update",
        due_date: "10/20/2924",
        category: "Habbit",
        completed: true
    },
];

module.exports.todo = function (req, res){

    return res.render('todo', {todos});
}


module.exports.addTodo = function(req, res){

    //Just a typical way of handling ID this will be easier with databases.
    //Mimicing the database _id feature.
    if(todos.length === 0){
        todos.push({
            _id: "1",
            ...req.body
        })
    }else{
        const lastId = todos[todos.length-1]._id
        const nextId = parseInt(lastId) + 1;
        req.body._id = nextId+"";
        todos.push(req.body);
    }

    return res.redirect('/');
}

module.exports.deleteTodo = function(req, res){

    const todosLeft = todos.filter(todo=>todo._id != req.query._id);

    // console.log(todosLeft);

    todos = todosLeft;

    return res.send();

}