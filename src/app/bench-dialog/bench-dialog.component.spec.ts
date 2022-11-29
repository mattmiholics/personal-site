import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenchDialogComponent } from './bench-dialog.component';

describe('BenchDialogComponent', () => {
  let component: BenchDialogComponent;
  let fixture: ComponentFixture<BenchDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BenchDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenchDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
