import { Task }  from '../../core/entity/task.js'

export interface TaskGatewayInterface {
  new(task: Task): boolean;  
  edit(task: Task): boolean;  
}