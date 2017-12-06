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
  Será criado um arquivo products.service.ts
 
 

