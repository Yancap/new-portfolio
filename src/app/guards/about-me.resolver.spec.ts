import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { aboutMeResolver } from './about-me.resolver';

describe('aboutMeResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => aboutMeResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
