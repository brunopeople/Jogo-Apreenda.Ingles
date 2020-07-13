import { Component, OnInit,EventEmitter,Output,OnDestroy } from '@angular/core';


import {Frase} from '../shared/frase.model'
import {FRASES} from './frase-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

public frases: Frase [] = FRASES
public instrucao: string = 'Traduza a frase abaixo!'
public resposta: string = ''

public rodada: number = 0
public rodadaFrase: Frase

public progresso: number = 0

public tentativas: number = 3

@Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()


  constructor() { 
    this.atualizaRodada() 
  }

  ngOnInit(){

  }

  ngOnDestroy(){

  }


  
  public atualizaResposta(resposta: Event):void {
    this.resposta = (<HTMLInputElement>resposta.target).value
    //console.log(this.resposta)
  }

  public verificaResposta():void {
    if(this.rodadaFrase.frasePtBr == this.resposta){
      //trocar a pergunta da rodada
      this.rodada++

      //Progresso
      this.progresso = this.progresso + (100 / this.frases.length)

      //
      if(this.rodada === 4){
        this.encerrarJogo.emit('Vitoria')
      }

      //atualiza o objeto rodadaFrase
      this.atualizaRodada()
    } else {
      //diminuir a variável tentativas 
      this.tentativas--

      if(this.tentativas === -1){
        this.encerrarJogo.emit('derrota')
      }
    }
  }
  public atualizaRodada(): void{
    // define a frase de acordo com o array frase com base de uma lógica 
    this.rodadaFrase = this.frases[this.rodada]

    //assim que o usuário traduzir ou errar na sua tradução este método e limpar a respota
    this.resposta = ''
  }
}
