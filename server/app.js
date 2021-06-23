const express = require("express")
const { graphqlHTTP } = require("express-graphql")
const schema = require("./schema/schema")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(cors())

mongoose.connect(
    "mongodb+srv://*****:******@graphql-starter.bfewk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
)
mongoose.connection.once("open", () => {
    console.log("Connected to database.")
})

app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        graphiql: true,
    })
)

app.listen(4000, () => {
    console.log("listening to port 4000...")
})
