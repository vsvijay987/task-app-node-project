require('../src/db/mongoose');

const Task = require('../src/models/task');

Task.findByIdAndDelete("60751f89c9947d4a4c764909").then((task) => {
    console.log(task)
    return Task.countDocuments({completed: false})
}).then((count) => {
    console.log(count)
}).catch(e => console.log(e))