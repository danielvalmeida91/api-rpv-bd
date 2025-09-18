import { getAll } from "../../services/products.js"


export const routes = async (app) => {
    app.get('/products', getAll)
}