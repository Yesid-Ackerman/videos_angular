import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {tasks} from './../../models/task.model'
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tasks = signal<tasks[]>([
    {
      id: Date.now(),
      title: 'Crear Proyecto',
      completed: false
    },

  ]);

  newTaskCtrl = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required,
    ]
  });

  changeHandler(){
    if(this.newTaskCtrl.valid){
      const value = this.newTaskCtrl.value;
      this.addTask(value);
      this.newTaskCtrl.setValue('');
    }
    
  }

  addTask(title: string){
    const newTasks = {
      id: Date.now(),
      title,
      completed: false,

    };
    this.tasks.update((tasks) => [...tasks, newTasks]);
  }

  deleteTask(index: number){
    this.tasks.update((tasks) => tasks.filter((tasks,position) => position !=index));
  }

  updateTask(index: number){
   this.tasks.update((tasks) => {
    return tasks.map((task, position)=>{
        if(position === index){
          return{
            ...task,
            completed: !task.completed
          }
        }
        return task;
    })
   })
  }
}
