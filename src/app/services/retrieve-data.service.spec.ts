import { TestBed, inject } from '@angular/core/testing';

import { RetrieveDataService } from './retrieve-data.service';

describe('RetrieveDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RetrieveDataService]
    });
  });

  it('should be created', inject([RetrieveDataService], (service: RetrieveDataService) => {
    expect(service).toBeTruthy();
  }));
});
