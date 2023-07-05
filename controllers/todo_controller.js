const todo = require('../models/todo_model');



module.exports.todo = async function (req, res) {

    try{
        const todos = await todo.find({});
        
        return res.render('todo', { todos });
        
    }catch(error){
        console.log("error fetching todo: ", error);
        return res.render('todo', {todos, error});
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

module.exports.deleteTodo = async function (req, res) {

    try {
        //fetch the doc with id and delete the data.
        const result = todo.findByIdAndDelete(req.query._id);

        //result will have query only.

        //executed the query

        const doc = await result.exec();

        console.log(doc);

        return res.json({status: "deleted"});
    } catch (error) {
        console.log("Error in deleting todo", error);
        return res.json({error: "Not deleted."})
    }
    
}