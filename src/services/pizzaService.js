import sql from 'mssql';
import configDB from '../models/db.js';

export const getAll = async () => {
    const conn = await sql.connect(configDB);
    const results = await conn.request().query('SELECT * FROM Pizzas');
    console.log(results);
}
export const getById = async (id) => {
    const conn = await sql.connect(configDB);
    const results = await conn.request().input('pId', id).query('SELECT * FROM Pizzas where Id = @pId');//si quiero agregar mas variables, solo tengo que copiar y pegar mas inputs, primero va el nombre y despues el valor
    console.log(results);
}
export const create = async (pizza) => {
    const conn = await sql.connect(configDB);
    const results = await conn.request().input('pNombre', pizza.Nombre).input('pLibreGluten', pizza.LibreGluten).input('pImporte', pizza.Importe).input('pDescripcion', pizza.Descripcion).query('INSERT INTO Pizzas (Nombre, LibreGluten, Importe, Descripcion) VALUES (@pNombre, @pLibreGluten, @pImporte, @pDescripcion)');
    console.log(results);
}
export const update = async (pizza, id) => {
    const conn = await sql.connect(configDB);
    const results = await conn.request().input('pId', id).input('pNombre', pizza.Nombre).input('pLibreGluten', pizza.LibreGluten).input('pImporte', pizza.Importe).input('pDescripcion', pizza.Descripcion).query('UPDATE Pizzas SET Nombre=@pNombre, LibreGluten=@pLibreGluten, Importe=@pImporte, Descripcion=@pDescripcion WHERE Id=@pId');
    console.log(results);
}
export const deleteById = async (id) => {
    const conn = await sql.connect(configDB);
    const results = await conn.request().input('pId', id).query('DELETE FROM Pizzas where Id = @pId');
    console.log(results);
}