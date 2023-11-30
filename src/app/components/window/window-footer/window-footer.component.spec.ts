import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowFooterComponent } from './window-footer.component';

describe('WindowFooterComponent', () => {
  let component: WindowFooterComponent;
  let fixture: ComponentFixture<WindowFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WindowFooterComponent]
    });
    fixture = TestBed.createComponent(WindowFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
