import { Cadastro } from './shared/cadastro.model';
import { Cliente } from './shared/cliente.model';
import { CadastroService } from './shared/cadastro.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractModelSettings, ReactiveFormsRuleService, AdhocModelSettings, ResultsPassRequirement } from 'ng-form-rules';
import { of } from 'rxjs';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  validaForm: FormGroup;
  modelSettings: AbstractModelSettings<Cadastro>;

  request: Cliente = {
    idCliente: null,
    nmCliente: '',
    nrCpf: '',
    dsEmail: '',
    dtNasc: '',
    dsGenero: '',
    nrTelefone1: '',
    nrTelefone2: '',
    pwCliente: '',
    enderecos: null,
    cartoesCreditoDTO: null
  }

  onSubmit() { }

  constructor(
    private validaCad: FormBuilder,
    private cadastroService: CadastroService,
    private route: ActivatedRoute,
    private router: Router,
    private svc: ReactiveFormsRuleService
  ) {

  }

  ngOnInit(): void {
    this.cadForm();
    this.registrar();
    // this.modelSettings = AdhocModelSettings.create<Cadastro>(builder => {
    //   return [
    //     builder.property('nmCliente', prop => {
    //       prop.valid.push(builder.validNamedTest(
    //         'required',
    //         'Por favor, digite o nome',
    //         builder.rule(reg => !!reg.nmCliente)
    //       ));
    //       prop.valid.push(builder.validNamedTest(
    //         'length',
    //         'O nome deve ter de 5 a 65 caracteres!',
    //         builder.rule(reg => reg.nmCliente.length >= 5 &&
    //           reg.nmCliente.length <= 65),
    //         builder.rule(reg => !!reg.nmCliente)
    //       ));
    //     }),
    //     builder.property('pwCliente', prop => {
    //       prop.valid.push(builder.validNamedTest(
    //         'required',
    //         'Por favor, digite a senha.',
    //         builder.rule(reg => !!reg.pwCliente)
    //       ));
    //     }),
    //     builder.property('confPwCliente', prop => {
    //       prop.valid.push(builder.validNamedTest(
    //         'must-match',
    //         'Senha não correspondente',
    //         builder.rule(reg => reg.confPwCliente === reg.pwCliente, {
    //           dependencyProperties: ['pwCliente']
    //         })
    //       ));
    //       prop.edit.push(builder.editTest(
    //         builder.rule(reg => !!reg.pwCliente, {
    //           dependencyProperties: ['pwCliente']
    //         })
    //       ));
    //     })
    //   ];
    // });
    // this.validaForm = this.svc.createFormGroup(this.modelSettings);
  }

  registrar() {
    this.cadastroService.postCadastro(this.request).subscribe(
      response => {
        this.request = response;
        let cliente = localStorage['cliente'] = JSON.stringify(this.request);
        alert("Cadastro realizado, você está logado!");
        this.router.navigate(['']);
      }
    )
  }

  cadForm() {
    this.validaForm = this.validaCad.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern(/^[0-9]*$/)]],
      dataNasc: ['', [Validators.required]],
      genero: ['', [Validators.required]],
      mail: ['', [Validators.required, Validators.email]],
      tel1: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(11), Validators.pattern(/^[0-9]*$/)]],
      tel2: ['', [Validators.minLength(10), Validators.maxLength(11), Validators.pattern(/^[0-9]*$/)]],
      senha: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]],
      confsenha: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]]
    });
  }

}
