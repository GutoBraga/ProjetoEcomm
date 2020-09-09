import { ReactiveFormsRuleService } from 'ng-form-rules';
import { Cartao } from './../cadastro/shared/cartao.model';
import { Endereco } from './../cadastro/shared/endereco.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from '../cadastro/shared/cliente.model';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-minha-conta',
  templateUrl: './minha-conta.component.html',
  styleUrls: ['./minha-conta.component.css']
})
export class MinhaContaComponent implements OnInit {

  cliente: Cliente;
  endereco: Endereco;
  cartao: Cartao;

  constructor(
    private validaCad: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private svc: ReactiveFormsRuleService
  ) { }

  ngOnInit(): void {
    this.getCliente();
  }

  private getCliente() {
    this.cliente = JSON.parse(localStorage['cliente']);
  }

}
