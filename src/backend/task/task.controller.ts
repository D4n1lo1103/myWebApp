import { Controller, Get, Post, Delete, Body, Param, Patch } from '@nestjs/common';
import { TaskService, Task } from './task.service';
import { get } from 'http';
import { title } from 'process';

@Controller('tasks')
export class TaskController {
    constructor(private readonly taskService: TaskService) {}

    @Get()
    getAll(): Task[] {
        return this.taskService.getAll();
    }

    @Post()
    create(@Body('title') title: string): Task {
        return this.taskService.create(title);
    }

    @Delete(':id')
    delete(@Param('id') id: string): void {
        return this.taskService.delete(Number(id));
    }
}
