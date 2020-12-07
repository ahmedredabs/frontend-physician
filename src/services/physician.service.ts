import { Injectable } from '@angular/core';
import {Physician} from 'model/physician'
import { HttpClient} from '@angular/common/http';
import {environment} from 'environments/environment';
import { QrCode } from 'model/qr-code';

@Injectable()
export class PhysicianService {

  private physicianRegisterUrl: string;
  private physicianLoginUrl: string;
  private physicianGenerateQrCodeUrl: string;

  constructor(private http: HttpClient) {
    this.physicianRegisterUrl = environment.DOMAIN + ':' + environment.PORT_LOCAL + '/physician/register';
    this.physicianLoginUrl = environment.DOMAIN + ':' + environment.PORT_LOCAL + '/physician/login';
    this.physicianGenerateQrCodeUrl = environment.DOMAIN + ':' + environment.PORT_LOCAL + '/physician/generateQrCode';
  }

  public save(physician: Physician){
    return this.http.post<Physician>(this.physicianRegisterUrl, physician);
  }

  public login(physician: Physician){
    return this.http.post<Physician>(this.physicianLoginUrl, physician);
  }
  public generate(qrCode:QrCode){
    return this.http.post<QrCode>(this.physicianGenerateQrCodeUrl,qrCode)
  }

}

