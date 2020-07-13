var express = require('express');
var router = express.Router();
const pool = require('../database');

const {sub20,sub18,Historica,Jugadores,Equipos,actual,inicio, buscarid,id,idequipo,buscarequipo} = require('../controllers/index')

router.route('/')
  .get(inicio)
  
router.route('/sub18')
  .get(sub18)
  
router.route('/sub20')
  .get(sub20)

  router.route('/Historica')
  .get(Historica)

  router.route('/Jugadores')
  .get(Jugadores)

  router.route('/Equipos')
  .get(Equipos)

  router.route('/2020')
  .get(actual)

//// buscar jugador

router.route('/id')
  .get(id)

  router.route('/buscarid')
  .get(buscarid)

//// buscar equipo

  router.route('/equipo')
  .get(idequipo)

  router.route('/buscarequipo')
  .get(buscarequipo)


module.exports = router;