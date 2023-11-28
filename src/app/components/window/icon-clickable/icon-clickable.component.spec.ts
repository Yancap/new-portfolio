import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconClickableComponent } from './icon-clickable.component';

describe('IconClickableComponent', () => {
  let component: IconClickableComponent;
  let fixture: ComponentFixture<IconClickableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IconClickableComponent]
    });
    fixture = TestBed.createComponent(IconClickableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
