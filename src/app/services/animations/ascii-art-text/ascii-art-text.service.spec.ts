import { TestBed } from '@angular/core/testing';

import { AsciiArtTextService } from './ascii-art-text.service';

describe('AsciiArtTextService', () => {
  let service: AsciiArtTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsciiArtTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
