import { TaskController } from "../communication/controller/task.js";
import { MongoDataSource } from "../external/mongo.js";

const mongoSource = new MongoDataSource();
const dbase3dataSource = new Dbase3DataSource();
const taskController = new TaskController(dbase3dataSource);

taskController.newTask("primeira tarefa", "minha primeira tarefa", 5);
