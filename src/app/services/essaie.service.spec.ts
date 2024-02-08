import { TestBed } from '@angular/core/testing';

import { EssaieService } from './essaie.service';

describe('EssaieService', () => {
  let service: EssaieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EssaieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
