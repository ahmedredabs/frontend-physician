import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicianRegisterFormComponent } from './physician-register-form.component';

describe('PhysicianRegisterFormComponent', () => {
  let component: PhysicianRegisterFormComponent;
  let fixture: ComponentFixture<PhysicianRegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicianRegisterFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicianRegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
