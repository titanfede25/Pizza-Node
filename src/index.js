import {getAll,getById,create,update,deleteById} from './services/pizzaService.js';
import Pizza from './models/pizza.js'; 
import express from "express";

const app = express();
const port = 3001;
app.use(express.json());

app.get ('/:id', async(req, res)=>{
    const id            = await getById(req.params.id);
    res.status(200).send(id);
})

app.get ('/', async(req, res)=>{
    const pizzas        = await getAll();
    res.status(200).send(pizzas);
})

app.delete ('/:id', async(req, res)=>{
    const idBorrado     = await deleteById(req.params.id);
    res.status(200).send(idBorrado);
})

app.put ('/:id', async(req, res)=>{
    const id            = req.params.id;
    const pizza         = new Pizza();
    pizza.Nombre        = req.body.Nombre;
    pizza.LibreGluten   = req.body.LibreGluten;
    pizza.Importe       = req.body.Importe;
    pizza.Descripcion   = req.body.Descripcion;
    const cambiado      = await update(pizza, id);
    res.status(200).send(cambiado);
})
app.post('/', async(req, res)=>{
    const pizza         = new Pizza();
    pizza.Nombre        = req.body.Nombre;
    pizza.LibreGluten   = req.body.LibreGluten;
    pizza.Importe       = req.body.Importe;
    pizza.Descripcion   = req.body.Descripcion;
    const creado        = await create(pizza);
    res.status(201).send(creado);
})

app.listen (port, ()=>{
    console.log(`EJEMPLO ${port}`)
})

