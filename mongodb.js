//this file is only for learning mongodb
//CRUD = create, read, update, delete


// const mongodb = require("mongodb");

// const MongoClient = mongodb.MongoClient;

// const ObjectID = mongodb.ObjectID;

// const {MongoClient, ObjectID} = require("mongodb")

// const connectionUrl = "mongodb://127.0.0.1:27017";

// const databaseName = "task-manager";

// MongoClient.connect(
//   connectionUrl,
//   { useNewUrlParser: true, useUnifiedTopology: true },
  
//   (error, client) => {
//     if (error) return console.log("Something went Wrong!");

//     const db = client.db(databaseName);

    // db.collection("users").insertOne(
    //   {
    //     name: "Vijay",
    //     age: 23,
    //   },
    //   (err, result) => {
    //     if (err) return console.log("Unable to insert user!");
    //     console.log(result.ops);
    //   }
    // );

    // db.collection('users').insertMany([
    //     {
    //         name: 'Rohan',
    //         age: 23
    //     },
    //     {
    //         name: 'Somu',
    //         age: 24
    //     }
    // ], (err, result) => {
    //     if(err) return console.log("Unable to insert documents!")
    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'read',
    //         completed: true
    //     },
    //     {
    //         description: 'Buy groceries',
    //         completed: false
    //     },
    //     {
    //         description: 'Write Code',
    //         completed: true
    //     }
    // ], (err, result) => {
    //     if(err) return console.log("Error adding documents!")
    //     console.log(result.ops)
    // })
    // db.collection('tasks').findOne({_id: new ObjectID("6072cd398fa0c545b06d2e2a")}, (err, task) => {
    //     if(err) return console.log('unable to fetch task!')
    //     console.log(task);
    // })

    // db.collection('tasks').find({completed: false}).toArray((err, tasks) => {
    //     if(err) return console.log('Unable to fetch tasks!')
    //     console.log(tasks);
    // // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch(err => console.log(err))

//     db.collection('users').deleteMany({
//         name: 'Vijay'
//     }).then(result => console.log(result))
//     .catch(err => console.log(err))


//   }

// );
