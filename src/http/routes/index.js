import { getAll } from "../../services/products.js"


export const routes = async (app) => {
    app.get('/products', getAll)
    app.get('/products/:id', (req, res) => {
        console.log(req)

        return res.status(200).send({ message: "OK" })
    })
    app.get('/', () => {
        return console.log('Seja bem-vindo à minha API.')
    })
}