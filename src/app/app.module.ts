import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../header/header.component';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';
import { ListaCursosComponent } from '../lista-cursos/lista-cursos.component';
import { HomeComponent } from '../home/home.component';
import { DescricaoModalComponent } from '../descricao-modal/descricao-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CadastroComponent,
    ListaCursosComponent,
    HomeComponent,
    DescricaoModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DescricaoModalComponent]
})
export class AppModule { }
