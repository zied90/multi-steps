import { TestBed } from '@angular/core/testing';

import { WorkflowGuardService } from './workflow-guard.service';

describe('WorkflowGuardService', () => {
  let service: WorkflowGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkflowGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
