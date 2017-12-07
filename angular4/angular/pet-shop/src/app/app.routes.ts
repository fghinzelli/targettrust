import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from "./products/products.component";
import { ProductDetailsComponent } from "./products/product-details/product-details.component";
import { ProductFormComponent } from "./products/product-form/product-form.component";
import { LoginComponent } from "./login/login.component";
import { AuthGuard } from "./guard/auth.guard";

export const ROUTES: Routes = [
    { path: 'inicio', component: HomeComponent },
    { path: 'contato', component: ContactComponent },
    { path: 'login', component: LoginComponent },
    //{ path: 'produtos', component: ProductsComponent, pathMatch: 'full' },
    //{ path: 'produtos/:id', component: ProductDetailsComponent },
    // Forma mais organizada de rotas filhas:
    {
        path: 'produtos',
        children: [
            { path: '', component: ProductsComponent, pathMatch: 'full'},
            { 
                path: 'novo', 
                component: ProductFormComponent,
                canActivate: [ AuthGuard ]
            },
            { path: ':id', component: ProductDetailsComponent }
            
        ]
    },
    { path: '**', redirectTo: 'inicio'}
]