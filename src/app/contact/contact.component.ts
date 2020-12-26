import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<ContactComponent>) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    this.dialogRef.close();    
  }
}
