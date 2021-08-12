import { TestBed } from '@angular/core/testing';

import { SprintEditService } from './sprint-edit.service';

describe('SprintEditService', () => {
  let service: SprintEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SprintEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
