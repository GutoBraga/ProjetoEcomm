import { MeusPedidosComponent } from './meus-pedidos/meus-pedidos.component';
import { CestaComponent } from './cesta/cesta.component';
import { ProdutoDetalhesComponent } from './produto-detalhes/produto-detalhes.component';
import { MinhaContaComponent } from './minha-conta/minha-conta.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { CarouselItemsComponent } from './carousel-items/carousel-items.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';

const routes: Routes = [
  {
    path: '',
    component: CarouselItemsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'login/cadastro',
    component: CadastroComponent
  },
  {
    path: 'minha-conta',
    component: MinhaContaComponent
  },
  {
    path: 'meus-pedidos',
    component: MeusPedidosComponent
  },
  {
    path: 'categorias/:id',
    component: CategoriasComponent
  },
  {
    path: 'categorias',
    component: CategoriasComponent
  },
  {
    path: 'categorias/produto/:cd',
    component: ProdutoDetalhesComponent
  },
  {
    path: 'categorias/produto',
    component: ProdutoDetalhesComponent
  },
  {
    path: 'cesta',
    component: CestaComponent
  },
  {
    path: 'categorias/produto/:cd/cesta',
    component: CestaComponent 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
