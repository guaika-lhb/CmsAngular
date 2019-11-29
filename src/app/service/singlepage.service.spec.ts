import { TestBed, inject } from '@angular/core/testing';

import { SinglepageService } from './singlepage.service';

describe('SinglepageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SinglepageService]
    });
  });

  it('should be created', inject([SinglepageService], (service: SinglepageService) => {
    expect(service).toBeTruthy();
  }));
});
