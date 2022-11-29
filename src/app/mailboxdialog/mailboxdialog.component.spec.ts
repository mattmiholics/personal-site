import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailboxdialogComponent } from './mailboxdialog.component';

describe('MailboxdialogComponent', () => {
  let component: MailboxdialogComponent;
  let fixture: ComponentFixture<MailboxdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailboxdialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailboxdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
