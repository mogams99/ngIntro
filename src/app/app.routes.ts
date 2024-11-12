import { Routes } from '@angular/router';
// ! import all path
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'product',
        component: ProductComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '**',
        component: ErrorComponent
    }
];
