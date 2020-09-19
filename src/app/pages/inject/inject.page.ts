import { Component, OnInit, ViewChild } from '@angular/core';
import { IonButton } from '@ionic/angular';


@Component({
  selector: 'app-inject',
  templateUrl: './inject.page.html',
  styleUrls: ['./inject.page.scss'],
})
export class InjectPage implements OnInit {

  @ViewChild(IonButton, {static: false}) btnback: IonButton;
  @ViewChild(IonButton, {static: false}) btnext: IonButton;


  codeselected = '"Code 93"';

  codes = [
  {
    type: 'Code 93',
    src: 'assets/barcodes/code-93/1.png',
    text: '<script>alert("test")</script>'
  },
  {
    type: 'Code 93',
    src: 'assets/barcodes/code-93/2.png',
    text: ' or 1=1 --'
  },
  {
    type: 'Code 93',
    src: 'assets/barcodes/code-93/3.png',
    text: '`'
  },
  {
    type: 'Code 93',
    src: 'assets/barcodes/code-93/4.png',
    text: '--'
  },
  {
    type: 'Code 93',
    src: 'assets/barcodes/code-93/5.png',
    text: '"'
  },
  {
    type: 'Code 93',
    src: 'assets/barcodes/code-93/6.png',
    text: '>'
  },
  {
    type: 'Code 93',
    src: 'assets/barcodes/code-93/7.png',
    text: '<'
  },
  {
    type: 'Code 93',
    src: 'assets/barcodes/code-93/8.png',
    text: 'Can t print this'
  },
  {
    type: 'Code 93',
    src: 'assets/barcodes/code-93/9.png',
    text: 'Can t print this'
  },
  {
    type: 'Code 39',
    src: 'assets/barcodes/code-39/1.png',
    text: '<script>alert("test")</script>'
  },
  {
    type: 'Code 39',
    src: 'assets/barcodes/code-39/2.png',
    text: ' or 1=1 --'
  },
  {
    type: 'Code 39',
    src: 'assets/barcodes/code-39/3.png',
    text: '`'
  },
  {
    type: 'Code 39',
    src: 'assets/barcodes/code-39/4.png',
    text: '--'
  },
  {
    type: 'Code 39',
    src: 'assets/barcodes/code-39/5.png',
    text: '"'
  },
  {
    type: 'Code 39',
    src: 'assets/barcodes/code-39/6.png',
    text: '>'
  },
  {
    type: 'Code 39',
    src: 'assets/barcodes/code-39/7.png',
    text: '<'
  },
  {
    type: 'Code 39',
    src: 'assets/barcodes/code-39/8.png',
    text: 'Can t print this'
  },
  {
    type: 'Code 39',
    src: 'assets/barcodes/code-39/9.png',
    text: 'Can t print this'
  },
  {
    type: 'Code 39 Ext',
    src: 'assets/barcodes/code-39-ext/1.png',
    text: '<script>alert("test")</script>'
  },
  {
    type: 'Code 39 Ext',
    src: 'assets/barcodes/code-39-ext/2.png',
    text: ' or 1=1 --'
  },
  {
    type: 'Code 39 Ext',
    src: 'assets/barcodes/code-39-ext/3.png',
    text: '`'
  },
  {
    type: 'Code 39 Ext',
    src: 'assets/barcodes/code-39-ext/4.png',
    text: '--'
  },
  {
    type: 'Code 39 Ext',
    src: 'assets/barcodes/code-39-ext/5.png',
    text: '"'
  },
  {
    type: 'Code 39 Ext',
    src: 'assets/barcodes/code-39-ext/6.png',
    text: '>'
  },
  {
    type: 'Code 39 Ext',
    src: 'assets/barcodes/code-39-ext/7.png',
    text: '<'
  },
  {
    type: 'Code 39 Ext',
    src: 'assets/barcodes/code-39-ext/8.png',
    text: 'Can t print this'
  },
  {
    type: 'Code 39 Ext',
    src: 'assets/barcodes/code-39-ext/9.png',
    text: 'Can t print this'
  },
  {
    type: 'Code 128 a',
    src: 'assets/barcodes/code-128-a/1.png',
    text: '<script>alert("test")</script>'
  },
  {
    type: 'Code 128 a',
    src: 'assets/barcodes/code-128-a/2.png',
    text: ' or 1=1 --'
  },
  {
    type: 'Code 128 a',
    src: 'assets/barcodes/code-128-a/3.png',
    text: '`'
  },
  {
    type: 'Code 128 a',
    src: 'assets/barcodes/code-128-a/4.png',
    text: '--'
  },
  {
    type: 'Code 128 a',
    src: 'assets/barcodes/code-128-a/5.png',
    text: '"'
  },
  {
    type: 'Code 128 a',
    src: 'assets/barcodes/code-128-a/6.png',
    text: '>'
  },
  {
    type: 'Code 128 a',
    src: 'assets/barcodes/code-128-a/7.png',
    text: '<'
  },
  {
    type: 'Code 128 a',
    src: 'assets/barcodes/code-128-a/8.png',
    text: 'Can t print this'
  },
  {
    type: 'Code 128 a',
    src: 'assets/barcodes/code-128-a/9.png',
    text: 'Can t print this'
  },
  {
    type: 'Code 128 b',
    src: 'assets/barcodes/code-128-b/1.png',
    text: '<script>alert("test")</script>'
  },
  {
    type: 'Code 128 b',
    src: 'assets/barcodes/code-128-b/2.png',
    text: ' or 1=1 --'
  },
  {
    type: 'Code 128 b',
    src: 'assets/barcodes/code-128-b/3.png',
    text: '`'
  },
  {
    type: 'Code 128 b',
    src: 'assets/barcodes/code-128-b/4.png',
    text: '--'
  },
  {
    type: 'Code 128 b',
    src: 'assets/barcodes/code-128-b/5.png',
    text: '"'
  },
  {
    type: 'Code 128 b',
    src: 'assets/barcodes/code-128-b/6.png',
    text: '>'
  },
  {
    type: 'Code 128 b',
    src: 'assets/barcodes/code-128-b/7.png',
    text: '<'
  },
  {
    type: 'Code 128 b',
    src: 'assets/barcodes/code-128-b/8.png',
    text: 'Can t print this'
  },
  {
    type: 'Code 128 b',
    src: 'assets/barcodes/code-128-b/9.png',
    text: 'Can t print this'
  },
  {
    type: 'Code 128 c',
    src: 'assets/barcodes/code-128-c/1.png',
    text: '<script>alert("test")</script>'
  },
  {
    type: 'Code 128 c',
    src: 'assets/barcodes/code-128-c/2.png',
    text: ' or 1=1 --'
  },
  {
    type: 'Code 128 c',
    src: 'assets/barcodes/code-128-c/3.png',
    text: '`'
  },
  {
    type: 'Code 128 c',
    src: 'assets/barcodes/code-128-c/4.png',
    text: '--'
  },
  {
    type: 'Code 128 c',
    src: 'assets/barcodes/code-128-c/5.png',
    text: '"'
  },
  {
    type: 'Code 128 c',
    src: 'assets/barcodes/code-128-c/6.png',
    text: '>'
  },
  {
    type: 'Code 128 c',
    src: 'assets/barcodes/code-128-c/7.png',
    text: '<'
  },
  {
    type: 'Code 128 c',
    src: 'assets/barcodes/code-128-c/8.png',
    text: 'Can t print this'
  },
  {
    type: 'Code 128 c',
    src: 'assets/barcodes/code-128-c/9.png',
    text: 'Can t print this'
  },
  {
    type: 'Code QR',
    src: 'assets/barcodes/code-qr/1.png',
    text: '<script>alert("test")</script>'
  },
  {
    type: 'Code QR',
    src: 'assets/barcodes/code-qr/2.png',
    text: ' or 1=1 --'
  },
  {
    type: 'Code QR',
    src: 'assets/barcodes/code-qr/3.png',
    text: '`'
  },
  {
    type: 'Code QR',
    src: 'assets/barcodes/code-qr/4.png',
    text: '--'
  },
  {
    type: 'Code QR',
    src: 'assets/barcodes/code-qr/5.png',
    text: '"'
  },
  {
    type: 'Code QR',
    src: 'assets/barcodes/code-qr/6.png',
    text: '>'
  },
  {
    type: 'Code QR',
    src: 'assets/barcodes/code-qr/7.png',
    text: '<'
  },
  {
    type: 'Code QR',
    src: 'assets/barcodes/code-qr/8.png',
    text: 'Can t print this'
  },
  {
    type: 'Code QR',
    src: 'assets/barcodes/code-qr/9.png',
    text: 'Can t print this'
  }
];


public printcodes2: any = [];
codepos: number;
codemax: number;

codelabel: string;
codetext: string;
codesrc: string;


  constructor() { }

  ngOnInit() {
    this.codepos = 0;
    //console.log(this.codes);
    var printcodes = this.codes.filter(function(code)  {
      return code.type == "Code 93";
    });
    this.printcodes2 = printcodes;
    // console.log(printcodes)
    
    this.codelabel = printcodes[this.codepos].type;
    this.codesrc = printcodes[this.codepos].src;
    this.codetext = printcodes[this.codepos].text;
    this.codemax = printcodes.length;
  }

  onSelectChange(selectedValue: any) {
    this.codeselected = selectedValue.detail.value;
    // console.log(this.codeselected);

    if (this.codeselected == 'Code 93'){
      this.codepos = 0;
      //console.log(this.codes);
      var printcodes = this.codes.filter(function(code)  {
        return code.type == "Code 93";
      });
      this.printcodes2 = printcodes;
      // console.log(printcodes)
      
      this.codelabel = printcodes[this.codepos].type;
      this.codesrc = printcodes[this.codepos].src;
      this.codetext = printcodes[this.codepos].text;
      this.codemax = printcodes.length;

    }else if(this.codeselected == 'Code 39'){
      this.codepos = 0;
      //console.log(this.codes);
      var printcodes = this.codes.filter(function(code)  {
        return code.type == "Code 39";
      });
      this.printcodes2 = printcodes;
      // console.log(printcodes)
      
      this.codelabel = printcodes[this.codepos].type;
      this.codesrc = printcodes[this.codepos].src;
      this.codetext = printcodes[this.codepos].text;
      this.codemax = printcodes.length;

    }else if(this.codeselected == 'Code 39 Ext'){
      this.codepos = 0;
      //console.log(this.codes);
      var printcodes = this.codes.filter(function(code)  {
        return code.type == "Code 39 Ext";
      });
      this.printcodes2 = printcodes;
      // console.log(printcodes)
      
      this.codelabel = printcodes[this.codepos].type;
      this.codesrc = printcodes[this.codepos].src;
      this.codetext = printcodes[this.codepos].text;
      this.codemax = printcodes.length;

    }else if(this.codeselected == 'Code 128 a'){
      this.codepos = 0;
      //console.log(this.codes);
      var printcodes = this.codes.filter(function(code)  {
        return code.type == "Code 128 a";
      });
      this.printcodes2 = printcodes;
      // console.log(printcodes)
      
      this.codelabel = printcodes[this.codepos].type;
      this.codesrc = printcodes[this.codepos].src;
      this.codetext = printcodes[this.codepos].text;
      this.codemax = printcodes.length;

    }else if(this.codeselected == 'Code 128 b'){
      this.codepos = 0;
      //console.log(this.codes);
      var printcodes = this.codes.filter(function(code)  {
        return code.type == "Code 128 b";
      });
      this.printcodes2 = printcodes;
      // console.log(printcodes)
      
      this.codelabel = printcodes[this.codepos].type;
      this.codesrc = printcodes[this.codepos].src;
      this.codetext = printcodes[this.codepos].text;
      this.codemax = printcodes.length;

    }else if(this.codeselected == 'Code 128 c'){
      this.codepos = 0;
      //console.log(this.codes);
      var printcodes = this.codes.filter(function(code)  {
        return code.type == "Code 128 c";
      });
      this.printcodes2 = printcodes;
      // console.log(printcodes)
      
      this.codelabel = printcodes[this.codepos].type;
      this.codesrc = printcodes[this.codepos].src;
      this.codetext = printcodes[this.codepos].text;
      this.codemax = printcodes.length;

    }else if(this.codeselected == 'Code QR'){
      this.codepos = 0;
      //console.log(this.codes);
      var printcodes = this.codes.filter(function(code)  {
        return code.type == "Code QR";
      });
      this.printcodes2 = printcodes;
      // console.log(printcodes)
      
      this.codelabel = printcodes[this.codepos].type;
      this.codesrc = printcodes[this.codepos].src;
      this.codetext = printcodes[this.codepos].text;
      this.codemax = printcodes.length;
    }
 }


  next() {
    if (this.codepos === this.codemax - 1 ) {
      // this.codepos = 0;
      console.log('reset codepost ' + this.codepos);
      this.btnext.disabled = true;
      this.btnback.disabled = false;
    } else {
      this.btnext.disabled = false;
      this.codepos = this.codepos + 1;
      this.codelabel = this.printcodes2[this.codepos].type;
      this.codesrc = this.printcodes2[this.codepos].src;
      this.codetext = this.printcodes2[this.codepos].text;
    }

  }

  back() {

    if (this.codepos === 0 ) {
      // this.codepos = 0;
      console.log('reset codepost ' + this.codepos);
      this.btnback.disabled = true;
      this.btnext.disabled = false;
    } else {
      this.btnback.disabled = false;
      this.codepos = this.codepos - 1;
      this.codelabel = this.printcodes2[this.codepos].type;
      this.codesrc = this.printcodes2[this.codepos].src;
      this.codetext = this.printcodes2[this.codepos].text;
    }
  }

}
