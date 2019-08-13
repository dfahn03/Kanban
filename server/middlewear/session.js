import expressSession from 'express-session'
var mongoStore = require("connect-mongodb-session")(expressSession);

var store = new mongoStore({
    uri: "mongodb://student:student333@kanban-shard-00-00-mmkqw.azure.mongodb.net:27017,kanban-shard-00-01-mmkqw.azure.mongodb.net:27017,kanban-shard-00-02-mmkqw.azure.mongodb.net:27017/test?ssl=true&replicaSet=Kanban-shard-0&authSource=admin&retryWrites=true&w=majority",
    collection: "Sessions"
});

store.on("error", function (err) {
    console.log("[SESSION ERROR]", err);
});


export default class Session {
    constructor() {
        this.express = expressSession({
            secret: "th1s is 0ur s3cr3t",
            cookie: {
                maxAge: 1000 * 60 * 60 * 24 * 7 * 52 * 2,
            },
            store,
            resave: true,
            saveUninitialized: true
        })
    }
}