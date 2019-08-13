//THIS FILE STAYS BASICALLY THE SAME
import mongoose from 'mongoose'

//THIS STRING WILL CHANGE SLIGHTLY DEPENDING ON DB
const connectionString = "mongodb://student:student333@kanban-shard-00-00-mmkqw.azure.mongodb.net:27017,kanban-shard-00-01-mmkqw.azure.mongodb.net:27017,kanban-shard-00-02-mmkqw.azure.mongodb.net:27017/kanban?ssl=true&replicaSet=Kanban-shard-0&authSource=admin&retryWrites=true&w=majority"

let connection = mongoose.connection

mongoose.connect(connectionString)

//log any errors
connection.on('error', err => {
  console.error('[DATABASE ERROR]:', err)
})

//confirm connection
connection.once('open', () => {
  console.log('connected to the database')
})