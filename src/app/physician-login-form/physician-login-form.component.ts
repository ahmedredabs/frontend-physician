import { Component, OnInit } from '@angular/core';
import {Physician} from 'model/physician';
import { PhysicianService } from 'services/physician.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-physician-login-form',
  templateUrl: './physician-login-form.component.html',
  styleUrls: ['./physician-login-form.component.sass']
})
export class PhysicianLoginFormComponent {
  
  physician: Physician;

  constructor(  
    private route: ActivatedRoute,
    private router: Router,
    private physicianLoginService : PhysicianService){
    this.physician = new Physician();
  }

  onSubmit(){
    this.physicianLoginService.login(this.physician).subscribe(result => this.goToQRCodeGenerator());
  }

  // TODO !
  goToQRCodeGenerator(){
    this.router.navigate(['/']);
  }

}
