import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicianLoginFormComponent } from './physician-login-form.component';

describe('PhysicianRegisterFormComponent', () => {
  let component: PhysicianLoginFormComponent;
  let fixture: ComponentFixture<PhysicianLoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicianLoginFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicianLoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
