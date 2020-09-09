import { Cliente } from './cliente.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) { }

  private readonly API = 'api/novoCadastro/';

  postCadastro(request: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.API, request);
  }
}
