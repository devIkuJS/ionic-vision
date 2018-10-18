import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {ListarUsuariosProvider} from '../../providers/listar-usuarios';

import {Usuario} from '../../models/usuario';

/**
 * Generated class for the ListaUsuariosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-usuarios',
  templateUrl: 'lista-usuarios.html',
})
export class ListaUsuariosPage {


  public usuarios:Usuario;

  constructor(public navCtrl: NavController, public navParams: NavParams , private servicio:ListarUsuariosProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaUsuariosPage');

    this.listaUsuarios();
  }

  listaUsuarios(){
    this.servicio.listarUsuarios().subscribe(response => {

      console.log(response);
           this.usuarios = response['data'];

      
      
          });
  }

}
