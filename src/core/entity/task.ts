export class Task {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly priority: number;

  constructor(id: string, name: string, description: string, priority: number) {
    if (name.trim() == "") {
      throw new Error("Name should be informed");
    }

    if (description.trim() == "") {
      throw new Error("description should be informed");
    }

    if (priority < 0) {
      throw new Error("priority should be at least 0");
    }
    
    this.id = id;
    this.name = name;
    this.description = description;
    this.priority = priority;
  }
}