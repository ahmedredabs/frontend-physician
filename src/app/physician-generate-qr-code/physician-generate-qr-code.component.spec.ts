import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicianGenerateQrCodeComponent } from './physician-generate-qr-code.component';

describe('PhysicianGenerateQrCodeComponent', () => {
  let component: PhysicianGenerateQrCodeComponent;
  let fixture: ComponentFixture<PhysicianGenerateQrCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicianGenerateQrCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicianGenerateQrCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
