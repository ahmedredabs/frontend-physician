import { Component } from '@angular/core';
import {
  NgxQrcodeElementTypes,
  NgxQrcodeErrorCorrectionLevels,
} from '@techiediaries/ngx-qrcode';
import { ActivatedRoute, Router } from '@angular/router';
import { PhysicianService } from 'services/physician.service';
import { Qrcode } from 'model/qr-code';

@Component({
  selector: 'app-physician-generate-qr-code',
  templateUrl: './physician-generate-qr-code.component.html',
  styleUrls: ['./physician-generate-qr-code.component.sass'],
})
export class PhysicianGenerateQrCodeComponent {
  qrCode: Qrcode;
  elementType = NgxQrcodeElementTypes.URL;
  value = '';
  name = sessionStorage.getItem('physicianName');
  showQrCode = false;
  href=''

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private physicianQrCode: PhysicianService
  ) {
    this.qrCode = new Qrcode();
  }

  onSubmit() {
    this.qrCode.physician.id = sessionStorage.getItem('physicianId');
    this.physicianQrCode.generate(this.qrCode).subscribe((result) => {
      console.log(result);
      this.value = "PhysicianID\n"+this.qrCode.physician.id + "\nQrCodeID\n"+result.id ;
      this.showQrCode = true;
    });
  }
  

  downloadQRCode() {
    this.href = document.getElementsByTagName('img')[0].src;
  }

  goToQRCodeGenerator() {
    this.router.navigate(['/generateQrCode']);
  }
}
