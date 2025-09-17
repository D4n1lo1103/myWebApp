import { Injectable, NotFoundException } from '@nestjs/common';

export interface Task {
    id: number;
    title: string;
    completed: boolean;
}

@Injectable()
export class TaskService {
    private tasks: Task[] = [];
    private IdCounter = 1;

    getAll(): Task []{
        return this.tasks;
    }

    create(title: string): Task{
        const newTask: Task = {
            id: this.IdCounter++,
            title,
            completed: false,
        };
        this.tasks.push(newTask);
        return newTask;
    }

    delete(id: number): void {
        const index = this.tasks.findIndex(task => task.id === id);

        if (index === -1){
            throw new NotFoundException('Task con id ${id} non trovato')
        }
        this.tasks.splice(index, 1)
    }

    toggleComplete(id: number): Task {
        const task = this.tasks.find(task => task.id === id);
        if (!task) throw new NotFoundException('Task con id ${id} non trovato');
        task.completed = !task.completed;
        return task;
    }
}
