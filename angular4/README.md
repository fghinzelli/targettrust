# Curso de Angular 4 (04/12/2017 a 11/12/2017)


### Novo projeto
 ng new <nome_projeto> -prefix=<prefixo>

## Iniciar o servidor 
 ```
 ng serve
 ```
- Setando a porta:
 ```
 ng serve -port 9090
 ```
## Criar novo componente
 ```
 ng generate component <nome_componente>
 ```
 - Forma abreviada
 ```
 ng g c <nome_componente>
 ```
 - Parâmetro para não incluir o arquivo de testes
 ```
 spec=false
 ```
### Sintaxe
- [] = binding
- * = template
- [()] = 2 bind
- () = Eventes

### Roteamento


- No arquivo app.component.html deve ser inserido o seletor <router-outlet>

```
<router-outlet></router-outlet>
```


- Criar arquivo app.routes.ts

```
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

const ROUTES = [
    { path: '', compontent: HomeComponent },
    { path: 'contato', component: ContactComponent}
]
```

- No arquivo app.model.ts inserir 
 ```
 import { RouterModule } from "@angular/router";
 import { ROUTES } from './app.routes'
 ```
 e em imports
 ```
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
 ``` 
 - Para utilizar uma rota vazia (/)
 
 ```
 pathMatch: 'full'
 ```
 
 - Redirecionar 
 ```
 { path: '**', redirectTo: 'inicio'}
 ```
 
 - Na sequencia das rotas, é preferível utilizar o parâmetro pathMatch = 'full' em lugar de alterar a sequência
 das entradas na lista de rotas
 
 #### Organização de Rotas
 
 ```
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
 ```
 
 ### Links
 
 - Forma correta de implementar links com concatenação de strings
 <a [routerLink]="['/produtos', product.id]">Ver detalhes</a>
 
 
 ## Injeção de dependências
 
 ## Serviços
 
 - Preparação do webservice
 ``` npm install -g json-server ```
 ``` json-server <nome-json>```
  localhost:3000
 
 - Criação do serviço
 ```ng generate service <componente/servico>```
 ```ng g s products/products```
 
 - Será criado um arquivo products.service.ts

```
import { Injectable } from '@angular/core';
// Angular 2,4
// import { Http } from '@angular/http'
// Angular 5
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('http://localhost:3000/products')
  }
}
``` 
 
 - Módulos maiores devem ser declarados dentro do app.module.js
  
  ```
  @NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    ProductsComponent,
    ProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
 ```
 
 - No componente que irá consumir o serviço, importar o serviço, incluir em providers e incluí-lo no construtor:
 
 ```
 import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'ttt-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ ProductsService ]
})
export class ProductsComponent implements OnInit {

  products: any[]
  /*
  Valores estaticos
  products: any[] = [
    {id: 1, name: "Racao pedigree", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, magni."},
    {id: 2, name: "Gaiola de Hamster", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, magni."},
    {id: 3, name: "Cama para cachorro", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, magni."},
    {id: 4, name: "Roupa de gato", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, magni."}

  ]
  */
  constructor(private productsService: ProductsService) { }

  ngOnInit() {
    this.productsService.getAll().subscribe(
      (data:any[]) => this.products = data,
      error => {}
    )
  }

}
 ```
 
 - Para acionar uma promisse do serviço, é utilizado .subscribe, que "escuta" as alterações do serviço,
 num conceito de Programação Reativa. Sempre que uma alteração ocorrer os "ouvintes" serão avisados.
 
 - Para capturar os erros utiliza-se o segundo parametro do subscribe
 

- É possível passar concatenar uma string de uma url aos parâmetros utilizando outra sintaxe do EC6:
```
this.http.get(`http://localhost:3000/products/${id}`)
```


## Formulários

### Template Variables
- Dentro do template o valor de ngModel pode ser usado para testar outros campos
``` <input type="checkbox" [(ngModel)]="campo1" #show="ngModel">

	<div ngIf="show">
```

```
ng generate guard <nome_guardian>
```