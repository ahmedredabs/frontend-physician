import { Component } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { ActivatedRoute, Router } from '@angular/router';
import { PhysicianService } from 'services/physician.service'
import {QrCode} from 'model/qr-code'
import { generate } from 'rxjs';

@Component({
  selector: 'app-physician-generate-qr-code',
  templateUrl: './physician-generate-qr-code.component.html',
  styleUrls: ['./physician-generate-qr-code.component.sass']
})
export class PhysicianGenerateQrCodeComponent {

  isShown: boolean = false
  qrCode:QrCode;
  elementType=NgxQrcodeElementTypes.URL;
  correctionLevel=NgxQrcodeErrorCorrectionLevels.HIGH;
  value= "";
  name = sessionStorage.getItem("physicianName")

  constructor( 
    private route: ActivatedRoute,
    private router: Router,
    private physicianQrCode : PhysicianService){
    this.qrCode=new QrCode()
  }

  toggleShow() {

    this.isShown = ! this.isShown;
    
    }
    onSubmit(){
      this.qrCode.id_physician= sessionStorage.getItem("physicianId");
      console.log("id physician ",sessionStorage.getItem("physicianId"))
     this.physicianQrCode.generate(this.qrCode).subscribe(result=>{
       this.qrCode.id=result.id
       this.value=this.qrCode.id+this.qrCode.id_physician
     })
       
      
      
    }
  
    // TODO !
    goToQRCodeGenerator(){
      this.router.navigate(['/generateQrCode']);
    }
    
   
}
