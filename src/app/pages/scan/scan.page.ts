import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { NavController } from '@ionic/angular';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {

  num: string;
  format: string;
  name: string;

  constructor( public navCtrl: NavController, private barcodeScanner: BarcodeScanner, private dataLocal: DataLocalService) { }

  ngOnInit() {
  }

  scan() {
    this.barcodeScanner.scan().then(data => {
        // this is called when a barcode is found
        this.num = data.text;
        this.format = data.format;

        if (!data.cancelled) {
        }

      }).catch(err => {
         console.log('Error', err);
      });
  }
  add() {
    this.dataLocal.guardarRegistro(this.format, this.num, this.name);
    //this.dataLocal.cargarStorage();

  }

}
