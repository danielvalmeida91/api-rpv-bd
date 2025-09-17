

export const routes = async (app) => {
    app.get('/', (req , res) =>{
        console.log('is active2')
        return res.send({ message: "world"})
    })
}