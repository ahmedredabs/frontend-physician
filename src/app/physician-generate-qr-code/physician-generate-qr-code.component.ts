import { Component } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-physician-generate-qr-code',
  templateUrl: './physician-generate-qr-code.component.html',
  styleUrls: ['./physician-generate-qr-code.component.sass']
})
export class PhysicianGenerateQrCodeComponent {
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = 'https://www.techiediaries.com/';

  constructor() { }


}
