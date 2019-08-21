//THIS FILE STAYS BASICALLY THE SAME
import mongoose from 'mongoose'

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.connection.on('error', err => {
  console.error('[DATABASE ERROR]:', err)
})

//THIS STRING WILL CHANGE SLIGHTLY DEPENDING ON DB
const connectionString = process.env.ConnectionString || "mongodb://student:student333@kanban-shard-00-00-mmkqw.azure.mongodb.net:27017,kanban-shard-00-01-mmkqw.azure.mongodb.net:27017,kanban-shard-00-02-mmkqw.azure.mongodb.net:27017/Kanban?ssl=true&replicaSet=Kanban-shard-0&authSource=admin&retryWrites=true&w=majority";


export default class DbContext {
  static async connect() {
    try {
      let status = await mongoose.connect(connectionString)
      console.log("Connected")
      return status
    } catch (e) {
      console.error(e)
    }
  }
}


// let connection = mongoose.connection

// mongoose.connect(connectionString)

// //log any errors
// connection.on('error', err => {
//   console.error('[DATABASE ERROR]:', err)
// })

// //confirm connection
// connection.once('open', () => {
//   console.log('connected to the database')
// })