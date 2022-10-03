import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DosesregComponent } from './dosesreg.component';

describe('DosesregComponent', () => {
  let component: DosesregComponent;
  let fixture: ComponentFixture<DosesregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DosesregComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DosesregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
