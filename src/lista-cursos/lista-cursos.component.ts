import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.scss']
})
export class ListaCursosComponent implements OnInit {
  dadosCurso: Array<Curso> = new Array<Curso>();

  constructor() { }

  ngOnInit(): void {
    this.dadosCurso.push({nome: localStorage.nomeCurso, 
      dataInicio: localStorage.dataInicio,
       dataFim: localStorage.dataFim, 
       duracao: localStorage.duracao, 
       descricao: localStorage.descricaoCurso});
  }

}
