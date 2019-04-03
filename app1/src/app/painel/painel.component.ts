import { Component, OnInit } from '@angular/core';


import {Frase} from '../shared/frase.model'
import {FRASES} from './frase-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

public frases: Frase [] = FRASES
public instrucao: string = 'Traduza a frase abaixo!'
public resposta: string = ''

public rodada:number = 0

public rodadaFrase:Frase

public progresso:number = 0

public tentativas:number = 5

  constructor() { 
  this.atualizaRodada()
  }
  ngOnInit() {
  }
  	public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
    //console.log(this.resposta)
  }
    public verificaRespota(): void{
    console.log(this.tentativas)
      if(this.rodadaFrase.frasePTBr == this.resposta){
        alert('A traducao está correta')

        //trocar pergunta da rodada
       this.rodada++

        //progresso
        this.progresso  = this.progresso + (100 / this.frases.length)
        console.log(this.progresso)

        //atualiza o objeto da rodadaFrase
        this.atualizaRodada()

        }else{
          //diminuir a variavel tentativas
          this.tentativas--

          if(this.tentativas === -1){
            alert('Você perdeu todas tentativas')
          }
        }

        console.log(this.tentativas)

    }


    public atualizaRodada(): void {
      //define a frase da rodada com base na lógica de orientação a objetos
      this.rodadaFrase = this.frases[this.rodada]

      //limpar a resposta
       this.resposta = ''

    }
}
