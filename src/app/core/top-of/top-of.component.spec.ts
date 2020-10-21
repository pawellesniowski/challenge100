import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopOfComponent } from './top-of.component';

describe('TopOfComponent', () => {
  let component: TopOfComponent;
  let fixture: ComponentFixture<TopOfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopOfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopOfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
