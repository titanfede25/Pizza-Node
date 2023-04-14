import {getAll,getById,create,update,deleteById} from './services/pizzaService.js';
import Pizza from './models/pizza.js'; 
import express from "express";

const app = express();
const port = 3000;

app.get ('/:id', async(req, res)=>{
    const id = await getById(req.params.id);
    res.send(id);
})
app.get ('/', async(req, res)=>{
    const pizzas = await getAll();
    res.send(pizzas);
})
app.delete ('/:id', async(req, res)=>{
    const idBorrado = await deleteById(req.params.id);
    res.send(idBorrado);
})
app.listen (port, ()=>{
    console.log(`EJEMPLO ${port}`)
})

