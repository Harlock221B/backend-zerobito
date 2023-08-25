import { Router} from "express";
import { CreateUsuarioController } from "./controllers/CreateUsuarioController";
import { GetallUsuariosController } from "./controllers/GettAllUsuariosController";
import { DeleteUsuarioController } from "./controllers/DeleteUsuarioController";
import { UpdateDateColumn } from "typeorm";
import { UpdateUsuarioController } from "./controllers/UpdateUsuarioController";

const routes = Router();


//CRUD

routes.post("/users", new CreateUsuarioController().handle);
routes.get("/users", new GetallUsuariosController().handle);
routes.delete("/users/:id", new DeleteUsuarioController().handle);
routes.put("/users/:id", new UpdateUsuarioController().handle);

export {routes};