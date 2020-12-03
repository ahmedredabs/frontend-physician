import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhysicianRegisterFormComponent} from 'app/physician-register-form/physician-register-form.component'
import { PhysicianLoginFormComponent } from './physician-login-form/physician-login-form.component';

const routes: Routes = [
  { path: 'register', component: PhysicianRegisterFormComponent },
  { path: 'login', component: PhysicianLoginFormComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
