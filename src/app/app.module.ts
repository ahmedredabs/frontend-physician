import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'app/app-routing.module';
import { AppComponent } from 'app/app.component';
import { PhysicianRegisterFormComponent } from 'app/physician-register-form/physician-register-form.component';
import { HttpClientModule } from '@angular/common/http';
import { PhysicianLoginFormComponent } from 'app/physician-login-form/physician-login-form.component';
import { PhysicianService } from 'services/physician.service';
import { PhysicianGenerateQrCodeComponent } from './physician-generate-qr-code/physician-generate-qr-code.component';


@NgModule({
  declarations: [
    AppComponent,
    PhysicianRegisterFormComponent,
    PhysicianLoginFormComponent,
    PhysicianGenerateQrCodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxQRCodeModule,
    FormsModule
  ],
  providers: [PhysicianService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
