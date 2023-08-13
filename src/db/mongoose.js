const mongoose = require('mongoose')

//taskapp
//mongo-task123

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

//Create an instance of the model
// const me = new User({
//     name: '  Mauro ',
//     email: 'MAURONV@gmai.com',
//     password: '012128'
// })

// me.save().then((me) => {
//     console.log(me)
// }).catch((error) => {
//     console.log(`Error: ${error}`)
// })


// const task = new Task({
//     description: '  Practice marimba wlala  ',
//     //completed: false
// })

// task.save().then((task) => {
//     console.log(task)
// }).catch((error) => {
//     console.log(`Error: ${error}`)
// })

