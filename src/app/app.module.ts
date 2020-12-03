import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'app/app-routing.module';
import { AppComponent } from 'app/app.component';
import { PhysicianRegisterFormComponent } from 'app/physician-register-form/physician-register-form.component';
import { HttpClientModule } from '@angular/common/http';
import { PhysicianLoginFormComponent } from './physician-login-form/physician-login-form.component';
import { PhysicianService } from 'services/physician.service';


@NgModule({
  declarations: [
    AppComponent,
    PhysicianRegisterFormComponent,
    PhysicianLoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PhysicianService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
