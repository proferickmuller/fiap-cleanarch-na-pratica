import { TaskDTO } from "../../common/dto/task.js";
import { DataSourceInterface } from "../../common/interfaces/datasource.js";
import { TaskGatewayInterface } from "../../common/interfaces/task.js";
import { Task } from "../../core/entity/task.js";

export class TaskGateway implements TaskGatewayInterface {
  dataSource: DataSourceInterface;
  
  constructor(dataSource: DataSourceInterface) {
    this.dataSource = dataSource;
  }
  
  public new(task: Task): boolean {
    const dto = new TaskDTO(task.id, task.name, task.description, task.priority);
    this.dataSource.createTask(dto);
    return true;
  }

  public edit(task: Task): boolean {
    const dto = new TaskDTO(task.id, task.name, task.description, task.priority);
    this.dataSource.editTask(dto);
  }

  
}