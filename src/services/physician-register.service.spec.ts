import { TestBed } from '@angular/core/testing';

import { PhysicianRegisterService } from 'services/physician-register.service';

describe('PhysicianRegisterService', () => {
  let service: PhysicianRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhysicianRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
