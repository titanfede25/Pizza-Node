import {getAll,getById,create,update,deleteById} from './services/pizzaService.js';
import Pizza from './models/pizza.js'; 
import express from "express";

const app = express();
const port = 3001;
app.use(express.json());

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

app.put ('/api/:id', async(req, res)=>{
    const id = req.params.id;
    const pizza= new pizza();
    pizza.Nombre=req.body.Nombre;
    pizza.LibreGluten=req.body.LibreGluten;
    pizza.Importe = req.body.Importe;
    pizza.Descripcion=req.body.Descripcion;
    const cambiado = await update(pizza, id);
    res.send(cambiado);
})

app.listen (port, ()=>{
    console.log(`EJEMPLO ${port}`)
})

