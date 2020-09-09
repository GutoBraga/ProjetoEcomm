import { ResponseFabricantes } from './fabricante.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseProdutos, Produtos } from './produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  private readonly API = 'api/produtos/subcategoria';

  private readonly APIDetalhes = 'api/produtos/codigo';

  private readonly APIfiltroFabricante = 'api/fabricantes';

  public getProdutos() {
    return this.http.get<ResponseProdutos[]>(this.API);
  }
  
  public getProdutoPorCd(cd: string): Observable<ResponseProdutos[]> {
    const URLDetalhes = `${this.APIDetalhes}/${cd}`;

    return this.http.get<ResponseProdutos[]>(URLDetalhes);
  }

  public getProdutosPorId(id: string): Observable<ResponseProdutos[]> {
    const URL = `${this.API}/${id}`;

    return this.http.get<ResponseProdutos[]>(URL);
  }

  public getFabricantesPorSubCategoria(id: string): Observable<ResponseFabricantes[]> {
    const URL = `${this.APIfiltroFabricante}/${id}`;

    return this.http.get<ResponseFabricantes[]>(URL)
  }
}
