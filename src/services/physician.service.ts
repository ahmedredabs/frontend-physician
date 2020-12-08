import { Injectable } from '@angular/core';
import {Physician} from 'model/physician'
import { HttpClient} from '@angular/common/http';
import {environment} from 'environments/environment';
import { Qrcode } from 'model/qr-code';

@Injectable()
export class PhysicianService {

  private physicianRegisterUrl: string;
  private physicianLoginUrl: string;
  private physicianGenerateQrCodeUrl: string;

  constructor(private http: HttpClient) {
    this.physicianRegisterUrl = environment.DOMAIN + ':' + environment.PORT_LOCAL + '/physician/register';
    this.physicianLoginUrl = environment.DOMAIN + ':' + environment.PORT_LOCAL + '/physician/login';
    this.physicianGenerateQrCodeUrl = environment.DOMAIN + ':' + environment.PORT_LOCAL + '/physician/qrcode';
  }

  public save(physician: Physician){
    return this.http.post<Physician>(this.physicianRegisterUrl, physician);
  }

  public login(physician: Physician){
    return this.http.post<Physician>(this.physicianLoginUrl, physician);
  }
  public generate(qrCode:Qrcode){
    return this.http.post<Qrcode>(this.physicianGenerateQrCodeUrl,qrCode)
  }

}

