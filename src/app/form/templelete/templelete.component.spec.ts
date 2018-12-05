import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleleteComponent } from './templelete.component';

describe('TempleleteComponent', () => {
  let component: TempleleteComponent;
  let fixture: ComponentFixture<TempleleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempleleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempleleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
