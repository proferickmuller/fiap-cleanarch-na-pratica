import { DataSourceInterface } from "../common/interfaces/datasource.js";
import { TaskDTO } from "../common/dto/task.js"

export class MongoDataSource implements DataSourceInterface {
  createTask(taskDto: TaskDTO): boolean {    
    // insere o item no mongodb
    return true;
  }

  createTag(tagDto: TagDTO): boolean {
    return true;
  }

  editTask(taskDto: TaskDTO): boolean {
    return true;
  }
}