import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { MailboxdialogComponent } from '../mailboxdialog/mailboxdialog.component';
import { BenchDialogComponent } from '../bench-dialog/bench-dialog.component';

@Component({
  selector: 'app-body-content',
  templateUrl: './body-content.component.html',
  styleUrls: ['./body-content.component.scss']
})
export class BodyContentComponent {
  
  cols : number;

  gridByBreakpoint = {
    xl: 3,
    lg: 3,
    md: 3,
    sm: 2,
    xs: 1
  }

  
  constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog) {
    
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]).subscribe(result => {
      if (result.matches) {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.cols = this.gridByBreakpoint.xs;
        }
        if (result.breakpoints[Breakpoints.Small]) {
          this.cols = this.gridByBreakpoint.sm;
        }
        if (result.breakpoints[Breakpoints.Medium]) {
          this.cols = this.gridByBreakpoint.md;
        }
        if (result.breakpoints[Breakpoints.Large]) {
          this.cols = this.gridByBreakpoint.lg;
        }
        if (result.breakpoints[Breakpoints.XLarge]) {
          this.cols = this.gridByBreakpoint.xl;
        }
      }
      
    });
    
  }
  openMailboxDialog(): void {
    let dialogRef = this.dialog.open(MailboxdialogComponent, {

      height: '90%', 
    });
}
openBenchDialog(): void {
  let dialogRef = this.dialog.open(BenchDialogComponent, {

    height: '90%', 
  });
}
}
