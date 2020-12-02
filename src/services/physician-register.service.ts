import { Injectable } from '@angular/core';
import {Physician} from 'model/physician'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PhysicianRegisterService {

  private physicianRegisterUrl: string;

  constructor(private http: HttpClient) {
    this.physicianRegisterUrl = 'http://localhost:8080/physician/register';
  }

  public save(company: Physician){
    return this.http.post<Physician>(this.physicianRegisterUrl, company);
  }

}

