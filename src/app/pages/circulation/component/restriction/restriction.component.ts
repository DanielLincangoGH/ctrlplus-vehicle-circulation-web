import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { tap } from 'rxjs';
import { RestrictionResponse } from '../../interfaces/restriction.response';
import { RestrictionService } from './../../services/restriction.service';
import { RestrictionDetailComponent } from './../restriction-detail/restriction-detail.component';
import * as moment from 'moment';

@Component({
  selector: 'app-restriction',
  templateUrl: './restriction.component.html',
  styleUrls: ['./restriction.component.scss'],
})
export class RestrictionComponent implements OnInit {
  showTime = true;
  hourFormat = 24;

  constructor(
    private fb: UntypedFormBuilder,
    private restrictionSrv: RestrictionService,
    public dialog: MatDialog
  ) {}

  registrationForm: UntypedFormGroup = this.fb.group({
    plateId: ['', Validators.required],
    evaluationDate: [new Date(), Validators.required],
  });

  ngOnInit(): void {}

  onEvaluateRestriction() {
    const { evaluationDate, plateId } = this.registrationForm.value;
    const currentDate = evaluationDate as Date;
    let formattedDate = moment(currentDate).format('yyyy-MM-DD HH:mm');
    this.restrictionSrv
      .evaluateRestriction(plateId, formattedDate)
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
