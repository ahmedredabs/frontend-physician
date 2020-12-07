import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhysicianRegisterFormComponent} from 'app/physician-register-form/physician-register-form.component'
import { PhysicianLoginFormComponent } from 'app/physician-login-form/physician-login-form.component';
import {PhysicianGenerateQrCodeComponent} from 'app/physician-generate-qr-code/physician-generate-qr-code.component'

const routes: Routes = [
  { path: 'register', component: PhysicianRegisterFormComponent },
  { path: 'login', component: PhysicianLoginFormComponent },
  { path: 'generateQrCode', component: PhysicianGenerateQrCodeComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
