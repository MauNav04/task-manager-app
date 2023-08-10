const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/tasks')

const app = express()
const port = process.env.PORT || 3030

//Middleware 
// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET reqs are dis')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back soon')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log(`Server is up in port ${port}`)
})


// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
//     const user = await User.findById('664d475680fa7bd28089a5e5f')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()