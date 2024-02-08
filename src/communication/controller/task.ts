import { NewTaskDTO } from '../../common/dto/task.js';
import { DataSourceInterface } from '../../common/interfaces/datasource.js';
import { TaskUseCases } from '../../core/usecase/task.js';
import { TaskGateway } from '../gateway/task.js';

export class TaskController {
  dataSource: DataSourceInterface;
  
  constructor(dataSource: DataSourceInterface) {
    this.dataSource = dataSource
  }

  public newTask(name: string, description: string, priority: number) {
    const taskGateway = new TaskGateway(this.dataSource);
    const newTaskData = new NewTaskDTO(name, description, priority);
    TaskUseCases.NewTask(newTaskData, taskGateway);
  }
}