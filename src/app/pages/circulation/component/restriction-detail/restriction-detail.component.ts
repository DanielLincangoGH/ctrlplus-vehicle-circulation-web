import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RestrictionResponse } from '../../interfaces/restriction.response';

@Component({
  selector: 'app-restriction-detail',
  templateUrl: './restriction-detail.component.html',
  styleUrls: ['./restriction-detail.component.scss'],
})
export class RestrictionDetailComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<RestrictionDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: RestrictionResponse
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {}
}
