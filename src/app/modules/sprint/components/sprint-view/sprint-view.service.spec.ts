import { TestBed } from '@angular/core/testing';

import { SprintViewService } from './sprint-view.service';

describe('SprintViewService', () => {
  let service: SprintViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SprintViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
