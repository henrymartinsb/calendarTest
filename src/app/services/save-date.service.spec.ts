import { TestBed } from '@angular/core/testing';

import { SaveDateService } from './save-date.service';

describe('SaveDateService', () => {
  let service: SaveDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaveDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
