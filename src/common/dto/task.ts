export class NewTaskDTO {
  name: string;
  description: string;
  priority: number;

  constructor(name: string, description: string, priority: number) {
    this.name = name;
    this.description = description;
    this.priority = priority;
  }
}

export class TaskDTO {
  id: string;
  name: string;
  description: string;
  priority: number;

  constructor(id: string, name: string, description: string, priority: number) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.priority = priority;
  }
}