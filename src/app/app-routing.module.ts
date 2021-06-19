import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from 'src/cadastro/cadastro.component';
import { HomeComponent } from 'src/home/home.component';
import { ListaCursosComponent } from 'src/lista-cursos/lista-cursos.component';

const routes: Routes = [
  { path: 'cadastro', component: CadastroComponent },
  { path: 'cursos', component: ListaCursosComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
