import { TestBed, inject } from '@angular/core/testing';

import { RepoRequestService } from './repo-request.service';

describe('RepoRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RepoRequestService]
    });
  });

  it('should be created', inject([RepoRequestService], (service: RepoRequestService) => {
    expect(service).toBeTruthy();
  }));
});
