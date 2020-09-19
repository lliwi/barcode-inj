import { Injectable } from '@angular/core';
import { Registro } from '../models/registro.model';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  guardados: Registro[] = [];
  codevalue: string;
  codeformat: string;


  constructor(public navCtrl: NavController, private storage: Storage) {
    // cargar registros
   this.cargarStorage();

   }

    async cargarStorage() {
    // this.guardados = (await this.storage.get('registros')) || [];

    const promise = new Promise((resolve, reject) => {
       this.storage.forEach((value, key) => {
       this.guardados.push(value);
      }).then((d) => {
        resolve(this.guardados);
        // console.log(this.guardados);
      });
    });
    return await promise;

   }

   guardarRegistro( format: string, num: string, name: string) {

   //this.cargarStorage();

   const nuevoRegistro = new Registro(format, num, name);
   this.guardados.unshift( nuevoRegistro );
   // console.log(this.guardados);
  // guardado local
   this.storage.set(num, this.guardados);
   //console.log(this.guardados);
   // this.navCtrl.navigateForward('/start');
   this.navCtrl.navigateRoot('/start');

  }

  keys() {
    this.storage.keys()
      .then(
        data => console.log(data),
        error => console.error(error)
      );
  }

   eliminarRegistro(item) {
   // guardado local
  // this.cargarStorage();
   this.storage.remove(item);
   //this.cargarStorage();
   //this.storage.set('registro', this.guardados);
   }
}
