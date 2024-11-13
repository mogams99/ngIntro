import { Routes } from '@angular/router';
// ! import all path
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { P1Component } from './p1/p1.component';
import { P2Component } from './p2/p2.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'product',
        component: ProductComponent,
        children: [
            {
                path: 'p1',
                component: P1Component
            },
            {
                path: 'p2',
                component: P2Component
            }
        ]
    },
    {
        path: '**',
        component: ErrorComponent
    }
];
