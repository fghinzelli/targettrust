import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from "@angular/router";
import { ROUTES } from './app.routes';
import { ProductsComponent } from './products/products.component'
import { ProductComponent } from "./products/product/product.component";
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { HttpClientModule } from "@angular/common/http";
import { ProductFormComponent } from './products/product-form/product-form.component';
import { ProductsService } from "./products/products.service";
import { LoginComponent } from './login/login.component';
import { AuthService } from "./auth.service";
import { AuthGuard } from "./guard/auth.guard";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    ProductsComponent,
    ProductComponent,
    ProductDetailsComponent,
    ProductFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    ProductsService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
