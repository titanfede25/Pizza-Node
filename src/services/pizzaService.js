import sql from 'mssql';
import configDB from '../models/db.js';
const conn = await sql.connect(configDB);

export const getAll = async () => {
    const results = await conn.request().query('SELECT * FROM Pizzas');

    console.log(results);
}


/*export const getById = async (id) => {
    const results = await conn.request().query('SELECT * FROM Pizzas where Id = @id');

    using(SqlConnection db = new SqlConnection(_connectionString))
    {
        ObjetoPizza = db.QueryFirstOrDefault<Pizza>(sql, new {pid = Id});
    }
    return ObjetoPizza;

    console.log(results);
}*/