import { RestrictionDetailComponent } from './../restriction-detail/restriction-detail.component';
import { Restriction } from './../../interfaces/restriction';
import { tap } from 'rxjs';
import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { RestrictionService } from './../../services/restriction.service';
import { RestrictionResponse } from '../../interfaces/restriction.response';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-restriction',
  templateUrl: './restriction.component.html',
  styleUrls: ['./restriction.component.scss'],
})
export class RestrictionComponent implements OnInit {
  constructor(
    private fb: UntypedFormBuilder,
    private restrictionSrv: RestrictionService,
    public dialog: MatDialog
  ) {}

  registrationForm: UntypedFormGroup = this.fb.group({
    plateId: ['', Validators.required],
    evaluationDate: ['', Validators.required],
  });

  ngOnInit(): void {}

  onEvaluateRestriction() {
    const { evaluationDate, plateId } = this.registrationForm.value;
    this.restrictionSrv
      .evaluateRestriction(plateId, evaluationDate)
      .pipe(
        tap((restriction: RestrictionResponse) =>
          this.dialog.open(RestrictionDetailComponent, {
            width: '300px',
            data: restriction,
          })
        )
      )
      .subscribe();
  }
}
