import { tap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestrictionService } from './../../services/restriction.service';
import { RestrictionResponse } from '../../interfaces/restriction.response';

@Component({
  selector: 'app-restriction',
  templateUrl: './restriction.component.html',
  styleUrls: ['./restriction.component.scss'],
})
export class RestrictionComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private restrictionSrv: RestrictionService
  ) {}

  registrationForm: FormGroup = this.fb.group({
    plateId: ['', Validators.required],
    evaluationDate: ['', Validators.required],
  });

  ngOnInit(): void {}

  onEvaluateRestriction() {
    const { evaluationDate, plateId } = this.registrationForm.value;
    this.restrictionSrv
      .evaluateRestriction(plateId, evaluationDate)
      .pipe(tap((estriction: RestrictionResponse) => console.log(estriction)))
      .subscribe();
  }
}
