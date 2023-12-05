import { TestBed } from '@angular/core/testing';

import { WindowPromptAnimationService } from './window-prompt-animation.service';

describe('WindowPromptAnimationService', () => {
  let service: WindowPromptAnimationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WindowPromptAnimationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
