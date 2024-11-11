import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormControl,
  FormArray,
  FormGroup
} from '@angular/forms';

import { ServerComponent } from './server/server.component';
import { ChildComponent } from "./child/child.component";

import { CustomPipe} from './pipes/custom.pipe';

import { Login } from './auth/login';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, ServerComponent, ChildComponent, CustomPipe, ReactiveFormsModule],
  encapsulation:ViewEncapsulation.ShadowDom,
  // encapsulation:ViewEncapsulation.None,
  // encapsulation:ViewEncapsulation.Emulated,
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

  // ! directive for
  cars = [
    "swift",
    "verna",
    "innova"
  ];
  car = {
    name: "swift",
    color: "black",
    power: 90,
  }
  carList =[
    {"name": "swift", "type": "hatchback", "price":810000},
    {"name": "dzire", "type": "hatchback", "price":880000},
    {"name": "ciaz", "type": "sedan", "price":1000000},
    {"name": "baleno", "type": "hatchback", "price":850000},
    {"name": "brezza", "type": "suv", "price":1400000},
    {"name": "fronx", "type": "hatchback", "price":1000000},
    {"name": "jimny", "type": "suv", "price":1300000}
  ];

  // ! directive switch
  color = "red";
  color1 = "green";
  color2 = "yellow";
  css = {
    color: '#ff5733',
    background: '#222',
    padding: '.5rem',
    border: '1px solid #ff5733',
  }

  // ! pipe
  pipeMessage = "Hello World";
  pipeCurrency = 7231;
  pipeNumber = 98;
  pipeDate = new Date();

  // ! form
  // ! template driven
  model = new Login(
    "",
    "",
    "",
    "",
    false
  );
  submitLogin(data:any){
    console.log(data.value);
  }
  // ! reactive
  // email = new FormControl('');
  reactiveLoginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
  })
  reactiveLoginUser() {
    console.log(this.reactiveLoginForm.status);
    console.log(this.reactiveLoginForm.value);
    console.log(this.reactiveLoginForm.valid);
  }
  // ! with form builder
  constructor(private fb:FormBuilder) {}
  rbuilderLoginForm = this.fb.group({
    email: this.fb.control('', [Validators.required, Validators.minLength(4)]),
    password: this.fb.control('', [Validators.required, Validators.minLength(6)]),
  })
  setVal(){this.rbuilderLoginForm.setValue({email:"user_1@mail.com", password:'1234'})}
  patchVal(){this.rbuilderLoginForm.patchValue({email:"aa@bb", password:'123456'})}
}
