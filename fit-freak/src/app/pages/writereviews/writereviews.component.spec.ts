import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritereviewsComponent } from './writereviews.component';

describe('WritereviewsComponent', () => {
  let component: WritereviewsComponent;
  let fixture: ComponentFixture<WritereviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WritereviewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WritereviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
