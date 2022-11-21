import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTPComponent } from './create-tp.component';

describe('CreateTPComponent', () => {
  let component: CreateTPComponent;
  let fixture: ComponentFixture<CreateTPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
