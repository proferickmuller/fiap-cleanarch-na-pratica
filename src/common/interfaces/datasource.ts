import { TaskDTO } from "../dto/task.js";

export interface DataSourceInterface {
  createTask(taskDto: TaskDTO): boolean;
  editTask(taskDto: TaskDTO): boolean;
}