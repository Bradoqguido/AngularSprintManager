import { TestBed } from '@angular/core/testing';

import { RegisterProjectService } from './register-project.service';

describe('RegisterProjectService', () => {
  let service: RegisterProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
