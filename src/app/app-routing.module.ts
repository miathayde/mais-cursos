import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from 'src/cadastro/cadastro.component';
import { ListaCursosComponent } from 'src/lista-cursos/lista-cursos.component';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent }
  { path: 'cadastro', component: CadastroComponent },
  { path: 'cursos', component: ListaCursosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
