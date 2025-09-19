import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Prova } from "./prova/prova";
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Prova, MatCardModule, MatButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
