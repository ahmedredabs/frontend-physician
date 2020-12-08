import { Component } from '@angular/core';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { ActivatedRoute, Router } from '@angular/router';
import { PhysicianService } from 'services/physician.service'
import {Qrcode} from 'model/qr-code'

@Component({
  selector: 'app-physician-generate-qr-code',
  templateUrl: './physician-generate-qr-code.component.html',
  styleUrls: ['./physician-generate-qr-code.component.sass']
})
export class PhysicianGenerateQrCodeComponent {

  qrCode:Qrcode;
  elementType=NgxQrcodeElementTypes.URL;
  correctionLevel=NgxQrcodeErrorCorrectionLevels.HIGH;
  value= "";
  name = sessionStorage.getItem("physicianName")

  constructor( 
    private route: ActivatedRoute,
    private router: Router,
    private physicianQrCode : PhysicianService){
    this.qrCode=new Qrcode()
  }

    onSubmit(){
      this.qrCode.physician.id= sessionStorage.getItem("physicianId");
     this.physicianQrCode.generate(this.qrCode).subscribe(result=>{
       this.qrCode.id=result.id
       this.value=this.qrCode.id+"\n"+this.qrCode.physician.id
     })
       
      
      
    }
  
    // TODO !
    goToQRCodeGenerator(){
      this.router.navigate(['/generateQrCode']);
    }
    
   
}
