import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, IonList, NavController } from '@ionic/angular';
import { DataLocalService } from 'src/app/services/data-local.service';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { promise } from 'protractor';


@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  @ViewChild('lista') lista: IonList;


codeformat: string;

   constructor(public alertController: AlertController,
               public navCtrl: NavController,
               private menuCtrl: MenuController,
               public dataLocal: DataLocalService) {

    if (this.dataLocal.guardados.length < 1) {
      // this.dataLocal.guardarRegistro('Code QR', '012345678', 'sample data');
    }
   // this.dataLocal.cargarStorage();
    
   }

  ngOnInit() {

  //this.dataLocal.cargarStorage();

  }

  refresh() {
    location.reload();
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

  delete(item){
    this.dataLocal.eliminarRegistro(item.num);
    this.lista.closeSlidingItems();
    // this.navCtrl.setRoot(this.navCtrl.getActive().component);
    location.reload();
  }

  brute(item) {
    this.lista.closeSlidingItems();
    this.namenormalize(item);
    this.dataLocal.codevalue = item.num;
    this.dataLocal.codeformat = this.codeformat;
    // this.dataLocal.codeformat = item.format.replace(/\s+/g, '').replace(/\b\w/g, l => l.toUpperCase());
    this.navCtrl.navigateForward('/brute');

  }

  async view(item){
    this.lista.closeSlidingItems();
    this.namenormalize(item);
    const msj = "<img src='https://barcode.tec-it.com/barcode.ashx?data=" +
                item.num +"&code="+ this.codeformat +"&dpi=96&dataseparator='/> <br> <p>Name: " +
                item.name +"</p><p>Format: " + item.format +"</p>";
    const alert = await this.alertController.create({
      header: 'Code details:',
      // subHeader: item.name + ' ' + item.format,
      message: msj,
      buttons: ['OK']
    });

    await alert.present();

  }

  namenormalize(item) {

    this.codeformat = item.format;
    // console.log(item.format);

    if (this.codeformat.startsWith('CODE') === true) {
      this.codeformat = this.codeformat.replace(/\s+/g, '');
      this.codeformat = this.codeformat.replace(/_/g, '');
      this.codeformat = this.codeformat.toLowerCase();
      this.codeformat = this.codeformat.charAt(0).toUpperCase() + this.codeformat.slice(1);
    } else if (this.codeformat.startsWith('QR_') === true) {
      this.codeformat = this.codeformat.replace(/\s+/g, '');
      this.codeformat = this.codeformat.replace(/_/g, '');
      this.codeformat = this.codeformat.toLowerCase();
      this.codeformat = this.codeformat.charAt(0).toUpperCase() +
                        this.codeformat.charAt(1).toUpperCase() +
                        this.codeformat.charAt(2).toUpperCase() +
                        this.codeformat.slice(3);

    } else if (this.codeformat.startsWith('DATA_') === true) {
      this.codeformat = this.codeformat.replace(/\s+/g, '');
      this.codeformat = this.codeformat.replace(/_/g, '');
      this.codeformat = this.codeformat.toLowerCase();
      this.codeformat = this.codeformat.charAt(0).toUpperCase() +
                        this.codeformat.charAt(1).toLowerCase() +
                        this.codeformat.charAt(2).toLowerCase() +
                        this.codeformat.charAt(3).toLowerCase() +
                        this.codeformat.charAt(4).toUpperCase() + this.codeformat.slice(5);
    } else if  (this.codeformat.startsWith('ITF') === true)  {
      this.codeformat = 'RSS14';

  } else  {
    this.codeformat = this.codeformat.replace(/\s+/g, '');
    this.codeformat = this.codeformat.replace(/_/g, '');
  }

  }

}
