import {getAll,getById,create,update,deleteById} from './services/pizzaService.js';
import Pizza from './models/pizza.js';

await getAll();
await getById(1);
const pizza = new Pizza();
pizza.Nombre= "Cheddar y Bacon";
pizza.LibreGluten= false;
pizza.Importe= 3000;
pizza.Descripcion="El especial de la abuela Marta";
await create(pizza);
const id= 1;
await update(pizza, id);
await deleteById(2);