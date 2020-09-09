import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { FormRulesModule } from 'ng-form-rules';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderMainComponent } from './header-main/header-main.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselItemsComponent } from './carousel-items/carousel-items.component';
import { FooterMainComponent } from './footer-main/footer-main.component';
import { HeaderSecondaryComponent } from './header-secondary/header-secondary.component';
import { FooterSecondaryComponent } from './footer-secondary/footer-secondary.component';
import { MeusPedidosComponent } from './meus-pedidos/meus-pedidos.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import { LostPasswordComponent } from './login/lost-password/lost-password.component';
import { MinhaContaComponent } from './minha-conta/minha-conta.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ProdutoDetalhesComponent } from './produto-detalhes/produto-detalhes.component';
import { CestaComponent } from './cesta/cesta.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMainComponent,
    CarouselComponent,
    CarouselItemsComponent,
    FooterMainComponent,
    HeaderSecondaryComponent,
    FooterSecondaryComponent,
    MeusPedidosComponent,
    CadastroComponent,
    LoginComponent,
    LostPasswordComponent,
    MinhaContaComponent,
    CategoriasComponent,
    ProdutoDetalhesComponent,
    CestaComponent
  ],
  imports: [
    NgxMaskModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FormRulesModule,
    StorageServiceModule
  ],
  providers: [ HttpClient ],
  bootstrap: [AppComponent]
})
export class AppModule { }
