import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angula_3.0';
  
  Nome:string='';
  Sobrenome:string='';
  Username:string='';
  CPF:string='';
  Telefone:string='';
  Endereco:string='';
  Complemento:string='';
  Senha:string='';
  Senha2:string='';

  
  constructor(public dialog: MatDialog){

  }

  openDialog(): void {
    const Ref = this.dialog.open(DialogComponent) 
    Ref.componentInstance.nome=this.Nome
    Ref.componentInstance.sobrenome=this.Sobrenome
    Ref.componentInstance.username=this.Username
    Ref.componentInstance.cpf=this.CPF
    Ref.componentInstance.telefone=this.Telefone
    Ref.componentInstance.endereco=this.Endereco
    Ref.componentInstance.complemento=this.Complemento
    Ref.componentInstance.senha=this.Senha
    Ref.componentInstance.senha2=this.Senha2
  }
  
   
  submit():void{
    console.log(
    `
    Nome=${this.Nome}
    Sobrenome=${this.Sobrenome}
    Username=${this.Username}
    CPF=${this.CPF}
    Telefone=${this.Telefone}
    Endereco=${this.Endereco}
    Complemento=${this.Complemento}
    Senha=${this.Senha}
    `
    )
  }

  



}




