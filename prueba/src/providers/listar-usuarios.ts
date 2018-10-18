import { HttpClientModule, HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import "rxjs/Rx";

import {Usuario} from '../models/usuario';

/*
  Generated class for the ListarMaterialesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListarUsuariosProvider {

  public domain: String = "https://reqres.in/";

  constructor(public http: HttpClient) {}

  listarUsuarios(){
    return this.http.get(`${this.domain}api/users`).map(res => res);

  }

}
