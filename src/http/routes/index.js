import { knexClient } from "../../database.js"


export const routes = async (app) => {
    app.get('/', (req, res) => {
        console.log('is active')
        knexClient.raw('SELECT database() as dbName')
            .then(result => {
                const dbName = result[0][0].dbName;
                console.log(`Estou conectado no banco ${dbName}`)
            })
        return res.send({ message: "world" })
    })
}