import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrenchDialogComponent } from './trench-dialog.component';

describe('TrenchDialogComponent', () => {
  let component: TrenchDialogComponent;
  let fixture: ComponentFixture<TrenchDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrenchDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrenchDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
