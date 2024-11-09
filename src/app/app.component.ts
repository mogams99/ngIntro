import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ServerComponent } from "./server/server.component";
import { ChildComponent } from "./child/child.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ServerComponent, FormsModule, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ngIntro';
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
  name = '';
  message = 'Hello Child';
  // updateName(x:Event){
  //   this.name = (x.target as HTMLInputElement).value
  // };
}
