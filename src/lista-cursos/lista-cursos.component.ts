import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.scss']
})
export class ListaCursosComponent implements OnInit {
  dadosCurso: Array<Curso> = [
    {
      nome: 'Curso de Angular.JS',
      dataInicio: '04/10/2021',
      dataFim: '25/10/2021',
      duracao: '3',
      descricao: 'O curso AngularJS tem como objetivo demonstrar a utilização prática do framework desde suas bases até recursos mais avançados, levando os leitores sempre para o mundo real de desenvolvimento.'
    },
    {
      nome: 'Curso de TypeScript',
      dataInicio: '02/8/2021',
      dataFim: '06/9/2021',
      duracao: '5',
      descricao: 'Neste curso, você terá uma apresentação da linguagem de programação, criada pela Microsoft, chamada de TypeScript, de maneira que a aprender as estruturas fornecidas por ela. Este conhecimento serve como de base para o curso de Angular, este Framework da Google é melhor documentado em TypeScript.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.dadosCurso.push({nome: localStorage.nomeCurso, 
      dataInicio: localStorage.dataInicio,
       dataFim: localStorage.dataFim, 
       duracao: localStorage.duracao, 
       descricao: localStorage.descricaoCurso});
  }

  // descricaoModal() {
  //   this.modalService.show(DescricaoModalComponent, {
  //     class: '',
  //     initialState: {

  //     }
  //   })
  // }
}
