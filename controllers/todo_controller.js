const todo = require('../models/todo_model');


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

module.exports.todo = async function (req, res) {

    try{
        const todos = await todo.find({});
        
        return res.render('todo', { todos });
        
    }catch(error){
        console.log("error fetching todo: ", error);
    }

    
}


module.exports.addTodo = async function (req, res) {

    try {
        const doc = await todo.create(req.body);

        const result = await doc.save();

        console.log(result);

        return res.redirect('/');

    } catch (error) {

        console.log("Error while inserting doc ", error);
        return res.redirect('/');
    }


}

module.exports.deleteTodo = function (req, res) {

    // console.log(req.query);

    const todosLeft = todos.filter(todo => todo._id != req.query._id);

    todos = todosLeft;

    return res.send();

}