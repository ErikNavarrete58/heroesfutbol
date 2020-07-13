const pool = require('../database');


const categorias = {};

categorias.inicio = (req, res) => { res.render('index');}


categorias.sub18 = async (req, res) => {
    const vistas = await pool.query("SELECT * FROM `FB_tablageneral_sub18_a20`");
    const categoria = 'Apertura Sub-18'
    res.render('tablas/principal',{vistas,categoria});}

categorias.sub20 = async (req, res) => { 
    const vistas = await pool.query("SELECT * FROM `FB_tablageneral_sub20_a20`");
    const categoria = 'Apertura Sub-20'
    res.render('tablas/principal',{vistas,categoria});}


categorias.Historica = async (req, res) => {

    const vistas = await pool.query("SELECT * FROM `FB_historica_global_20`");
    const categoria = 'Historica Copa FB'
    res.render('tablas/principal',{vistas,categoria});

}

categorias.Jugadores = (req, res) =>  {
    const categoria = 'id'
    const buscar = 'buscarid'

    res.render('id/forbuscar',{categoria,buscar});

}

categorias.Equipos = (req, res) =>  {
    const categoria = 'equipo'
    const buscar = 'buscarequipo'

    res.render('id/forbuscar',{categoria,buscar});

}

categorias.actual = (req, res) => { res.send('Actual   ');}

///buscar jugadore
categorias.id = async (req, res) => { 
    var id = req.query.id;   
const registro = await pool.query("Select * From `Registro Global Heroes` WHERE ID_FB = ?" , [id])

console.log(id)
console.log(registro)

    res.render('id/jugadores/id',{registro});
}

categorias.buscarid = async (req, res) => { 
    var id = req.query.id;   
    var idv = "%"+ id + "%";
 
    const registro = await pool.query("SELECT * FROM `Registro Global Heroes` WHERE `Nombres` LIKE ?",[idv])
    console.log(registro)
res.render('id/jugadores/buscarid',{registro,id})}

///buscar equipos
categorias.buscarequipo = async (req, res) => { 
    var id = req.query.id;   
    var idv = "%"+ id + "%";
 
    const registro =  await pool.query("SELECT * FROM `Registros Global Equipo Heroes` WHERE `Nombre_Equipo` LIKE ?" , [idv])
console.log(registro)
res.render('id/equipos/buscarequipos',{registro,id})}

categorias.idequipo = async (req, res) => { 
    var id = req.query.id;   
    const Globales = await pool.query("Select * From `FB_historica_global_20` WHERE ID = ?" , [id])
    const registro = await pool.query("Select * From `Registros Global Equipo Heroes` WHERE Id_plantel = ?" , [id])
    const Globales20 = await pool.query("Select * From `FB_tablageneral_sub20_a20` WHERE ID = ?" , [id])
    const Globales17 = await pool.query("Select * From `FB_tablageneral_sub18_a20` WHERE ID = ?" , [id])
console.log(id)
console.log(registro)


res.render('id/equipos/equipo',{registro,id,Globales,Globales20,Globales17})}

module.exports = categorias;