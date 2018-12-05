import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserApicomponentComponent } from './user-apicomponent.component';

describe('UserApicomponentComponent', () => {
  let component: UserApicomponentComponent;
  let fixture: ComponentFixture<UserApicomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserApicomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserApicomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
