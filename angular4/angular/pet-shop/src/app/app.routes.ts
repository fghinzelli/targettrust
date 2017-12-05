import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from "./products/products.component";
import { ProductDetailsComponent } from "./products/product-details/product-details.component";

export const ROUTES: Routes = [
    { path: 'inicio', component: HomeComponent },
    { path: 'contato', component: ContactComponent },
    //{ path: 'produtos', component: ProductsComponent, pathMatch: 'full' },
    //{ path: 'produtos/:id', component: ProductDetailsComponent },
    // Forma mais organizada de rotas filhas:
    {
        path: 'produtos',
        children: [
            { path: '', component: ProductsComponent, pathMatch: 'full'},
            { path: ':id', component: ProductDetailsComponent, } 
        ]
    },
    { path: '**', redirectTo: 'inicio'}
]