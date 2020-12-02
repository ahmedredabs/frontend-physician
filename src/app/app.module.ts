import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'app/app-routing.module';
import { AppComponent } from 'app/app.component';
import { PhysicianRegisterFormComponent } from 'app/physician-register-form/physician-register-form.component';
import { PhysicianRegisterService } from 'services/physician-register.service'
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PhysicianRegisterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PhysicianRegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
