const { MongoClient, ObjectId } = require('mongodb-legacy')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        console.log('Unable to connect to database!')
        return
    }

    const db = client.db(databaseName)

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('tasks').deleteOne({
        description: 'Trash'
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    // db.collection('tasks').updateMany({
    //     _id: new ObjectId("64d1face71357c40671610f5")
    // }, {
    //     $set: {
    //         name: "Felo"
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Andrew',
    //     age: 27
    // }, (error, result) => {
    //     if (error) {
    //         console.log('Unable to insert usert.')
    //          return
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('tasks').find({ completed: false }).toArray((error, users) => {
    //     if (error) {
    //         console.log('Unable to fetch data')
    //         return
    //     }

    //     console.log(users)
    // })
})
