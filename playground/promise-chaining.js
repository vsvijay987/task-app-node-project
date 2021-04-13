require('../src/db/mongoose');

const Task = require('../src/models/task');

// Task.findByIdAndDelete("60751f89c9947d4a4c764909").then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((count) => {
//     console.log(count)
// }).catch(e => console.log(e))

const deleteTaskAndCountIncomplete = async(id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({completed: false});
    return count;
}

deleteTaskAndCountIncomplete("6073da889c917806e876c122").then(count => console.log(count)).catch(e => console.log(e))