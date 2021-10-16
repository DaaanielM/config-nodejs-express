const model = require('../models/ejemplo.model');

const controller = {};


// controller.listar = async (req, res) => {
//     try {
//         const resultados = await model.listar();
//         res.json({
//         datos: resultados
//         });
//     } catch (error) {
//         res.json({
//             mensaje: "Ha ocurrido un error, contacte con el admin",
//             error: true
//         });
//     }
// }


// controller.crear = async (req, res) => {
//     try {
//         const datos = {
//             nombre: req.body.nombre,
//             correo: req.body.correo
//         }
//         await model.crear(datos);
//         res.json({
//             mensaje: "Elemento creado correctamente",
//             error: false
//         });
//     } catch (error) {
//         res.json({
//             mensaje: "Ha ocurrido un error, contacte con el admin",
//             error: false
//         })
//     }
// }


// controller.actualizar = async (req, res) => {
//     try {
//         const id = req.params.id;
//         const datos = {
//             nombre: req.body.nombre,
//             correo: req.body.correo
//         }
//         await model.actualizar(datos, id);
//         res.json({
//             mensaje: "Elemento actualizado correctamente",
//             error: false
//         });
//     } catch (error) {
//         res.json({
//             mensaje: "Ha ocurrido un error, contacte con el admin",
//             error: true
//         })
//     }
// }


// controller.eliminar = async (req, res) => {
//     try {
//         const id = req.params.id;
//         await model.eliminar(id);
//         res.json({
//             mensaje: "Elemento eliminado correctamente",
//             error: false
//         });
//     } catch (error) {
//         res.json({
//             mensaje: "Ha ocurrido un error, contacte con el admin",
//             error: true
//         });
//     }
// }