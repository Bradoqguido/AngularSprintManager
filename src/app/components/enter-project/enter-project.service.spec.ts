import { TestBed } from '@angular/core/testing';

import { EnterProjectService } from './enter-project.service';

describe('EnterProjectService', () => {
  let service: EnterProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnterProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
