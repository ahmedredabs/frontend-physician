import { TestBed } from '@angular/core/testing';
import { PhysicianService } from 'services/physician.service';

describe('PhysicianService', () => {
  let service: PhysicianService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhysicianService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
