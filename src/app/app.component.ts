import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServerComponent } from './server/server.component';
import { ChildComponent } from "./child/child.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ServerComponent, FormsModule, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngIntro';
  desc = 'This is ngIntro project';
  name = '';
  x = 0;
  message = 'Hello from App Component';
  serverMessage = 'Hello from Server Component';

  showVal(count: number){
    console.log(count);
    this.x=count;
  }

  // ! directive if
  hybrid = true;
  nonhybird = false;
  valid = true;
}
