import express from "express";
import ClassController from "./controllers/ClassesController";
import ConnectionsController from "./controllers/ConnectionsController";

const routes = express.Router();

const ClassesControllers = new ClassController();
const ConnectionsControllers = new ConnectionsController();

// GET: Buscar ou listar uma informação
// POST: Criar alguma nova informação
// PUT: Atualizar uma informação
// DELETE: Deletar uma informação existente

// Corpo da requisição ( Request body ): DAdos para crição ou atualizar de um registro
// Route Params: identificar qual recurso eu quero atualizar ou deletar (:id)
// Query Params: paginação, filtro, ordenação (?text)

routes.get("/classes", ClassesControllers.index);
routes.post("/classes", ClassesControllers.create);

routes.get("/connections", ConnectionsControllers.index);
routes.post("/connections", ConnectionsControllers.create);

export default routes;
