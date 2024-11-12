import { Component } from '@angular/core';
  import { CommonModule } from '@angular/common';
  import { RouterOutlet } from '@angular/router';
  import { Routes, RouterModule, RouterLink, RouterLinkActive } from '@angular/router';
  
  @Component({
    selector: 'app-root',
    standalone: true,
    imports: [ CommonModule, RouterOutlet, RouterLink, RouterLinkActive ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
  })
  export class AppComponent {
    title = 'Routing';

    navbarCss = {
      'display': 'flex',
      'gap': '16px',
    };
  }