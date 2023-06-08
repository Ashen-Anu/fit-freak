import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRegisteredusersComponent } from './view-registeredusers.component';

describe('ViewRegisteredusersComponent', () => {
  let component: ViewRegisteredusersComponent;
  let fixture: ComponentFixture<ViewRegisteredusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRegisteredusersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRegisteredusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
