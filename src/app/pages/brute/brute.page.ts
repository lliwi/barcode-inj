import { Component, OnInit, ViewChild } from '@angular/core';
import { DataLocalService } from 'src/app/services/data-local.service';
import { IonRange } from '@ionic/angular';





@Component({
  selector: 'app-brute',
  templateUrl: './brute.page.html',
  styleUrls: ['./brute.page.scss'],
})
export class BrutePage implements OnInit {

  @ViewChild('range') range: IonRange;

   constructor( public dataLocal: DataLocalService) { }

  codevalue = this.dataLocal.codevalue;
  codeformat = this.dataLocal.codeformat;
  rangeMM = 0;
  step = 0;
  rangemin: string;
  rangemax: string;
  // currentvalue: number;
  rangeCurrentValue: any;
  codetype: string;
  stop: number;


  ngOnInit() {

    if ( Number(this.codevalue) - 1000 < 0 ) {
      this.rangemin = '0';
    }
    this.codetype = 'number';

    if (isNaN(Number(this.codevalue)) === true ) {
    this.codetype = 'string';
    console.log(this.codevalue);
    }

  }

  btnRup() {
    this.rangeMM = this.rangeMM + 10 ;

    this.rangemax = String(Number(this.codevalue) + this.rangeMM);
    this.rangemin = String(Number(this.codevalue) - this.rangeMM);

  }

  btnRdown() {
    if (this.rangeMM > 0) {
      this.rangeMM = this.rangeMM - 10 ;
      this.rangemax = String(Number(this.codevalue) + this.rangeMM);
      this.rangemin = String(Number(this.codevalue) - this.rangeMM);
    }

  }

  btnSup() {
    this.step = this.step + 1 ;
  }

  btnSdown() {
    if (this.step > 0) {
      this.step = this.step - 1 ;
    }
  }

  async play() {
    this.stop = 0;
    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    console.log(Number(this.rangemin));
    for ( let i = Number(this.rangemin); i < Number(this.rangemax); ) {
      this.rangeCurrentValue = i;

      await  sleep(1000);
      i = i + Number(this.step);

      if (this.stop > 0 ){
        i = Number(this.rangemax);
      }


    }

  }

  stoppressed() {
    this.stop = 1;
  }



}
