import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowAsideComponent } from './window-aside.component';

describe('WindowAsideComponent', () => {
  let component: WindowAsideComponent;
  let fixture: ComponentFixture<WindowAsideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WindowAsideComponent]
    });
    fixture = TestBed.createComponent(WindowAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
