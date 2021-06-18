import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  nome: string = "";
  dataInicio: string = "";
  dataFim: string = "";
  duracao: number = 0;
  descricao: string = "";

  inicio: string = "";
  fim: string = "";
  
  constructor() { }

  ngOnInit() {
    var inicio = new Date();
    var fim = new Date();
    
    this.inicio = ((inicio.getDate() )) + "/" + ((inicio.getMonth() + 1)) + "/" + inicio.getFullYear();
    this.fim = ((fim.getDate() + 1)) + "/" + ((fim.getMonth() + 1)) + "/" + fim.getFullYear();

    this.dataInicio = this.inicio;
    this.dataFim = this.fim;
  }

  cadastrar() {
    if(!this.nome || !this.dataInicio || !this.dataFim || !this.descricao || !this.duracao ||
      this.duracao == 0 || this.dataInicio == this.inicio || this.dataFim == this.fim) {
      alert("É necessário que todos os campos sejam preenchidos!")
    } else {
      localStorage.setItem("nomeCurso", this.nome);
      localStorage.setItem("descricaoCurso", this.descricao);
      localStorage.setItem("dataInicio", this.dataInicio);
      localStorage.setItem("dataFim", this.dataFim);
      localStorage.setItem("duracao", this.duracao.toString());

      window.location.assign("http://localhost:4200/");
    }
  }
}
