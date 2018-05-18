import { TestBed, inject } from '@angular/core/testing';

import { AutheServiceService } from './authe-service.service';

describe('AutheServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutheServiceService]
    });
  });

  it('should be created', inject([AutheServiceService], (service: AutheServiceService) => {
    expect(service).toBeTruthy();
  }));
});
