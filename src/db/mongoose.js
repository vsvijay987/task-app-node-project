const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// const User = mongoose.model("User", {
//   name: {
//     type: String,
//   },
//   age: {
//     type: Number,
//   },
//   password: {
//       type: String,
//       minLength: 6,
//       trim: true,
//       validate(value){
//           if(value.toLowerCase().includes('password')){
//               throw new Error('Password should not contain password text')
//           }
//       }
//   }
// });

// const me = new User({
//   name: "Vijay",
//   age: 24,
//   password: "    vij  aysa "
// });
// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((err) => console.log(err));

  
//   const task1 = new Task({
//     description: "learn book",
//     // completed: false,
//   });
//   task1.save()
//     .then(() => {
//       console.log(task1);
//     })
//     .catch((err) => console.log(err));


