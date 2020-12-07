import { Component, OnInit } from '@angular/core';
import {Physician} from 'model/physician';
import { PhysicianService} from 'services/physician.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-physician-register-form',
  templateUrl: './physician-register-form.component.html',
  styleUrls: ['./physician-register-form.component.sass']
})
export class PhysicianRegisterFormComponent {
  
  physician: Physician;

  constructor(  
    private route: ActivatedRoute,
    private router: Router,
    private physicianRegisterService : PhysicianService){
    this.physician = new Physician();
  }

  onSubmit(){
    this.physicianRegisterService.save(this.physician).subscribe(result => this.goToHome());
  }

  goToHome(){
    this.router.navigate(['/login']);
  }

}
