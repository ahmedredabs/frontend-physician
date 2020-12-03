import { Injectable } from '@angular/core';
import {Physician} from 'model/physician'
import { HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable()
export class PhysicianService {

  private physicianRegisterUrl: string;
  private physicianLoginUrl: string;

  constructor(private http: HttpClient) {
    this.physicianRegisterUrl = environment.DOMAIN + ':' + environment.PORT_LOCAL + '/company/register';
    this.physicianLoginUrl = environment.DOMAIN + ':' + environment.PORT_LOCAL + '/company/login';
  }

  public save(company: Physician){
    return this.http.post<Physician>(this.physicianRegisterUrl, company);
  }

  public login(company: Physician){
    return this.http.post<Physician>(this.physicianLoginUrl, company);
  }

}

