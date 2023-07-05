
//Making test object 
const todos = [
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

    // console.log("Added Todo", req.body);
    todos.push(req.body);

    todos[todos.length-1]._id = todos.length;

    return res.render('todo', {todos});
}