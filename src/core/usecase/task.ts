import { NewTaskDTO, TaskDTO } from '../../common/dto/task.js';
import { Task } from '../entity/task.js';
import { TaskGatewayInterface } from '../../common/interfaces/task.js';

export class TaskUseCases {
  public static NewTask(
    newTaskData: NewTaskDTO, 
    tasksGateway: TaskGatewayInterface
  ) {
    const now = new Date();
    const newId = now.getSeconds().toString();
    const newTask = new Task(
      newId, 
      newTaskData.name, 
      newTaskData.description, 
      newTaskData.priority
    );

    const ok = tasksGateway.new(newTask);
  }

  public static EditTask(
    task: TaskDTO,
    tasksGateway: TaskGatewayInterface
  ) {
    tasksGateway.edit(task)
  }
}