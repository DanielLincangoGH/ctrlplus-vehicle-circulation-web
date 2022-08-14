import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-restriction',
  templateUrl: './restriction.component.html',
  styleUrls: ['./restriction.component.scss'],
})
export class RestrictionComponent implements OnInit {
  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {}

  registrationForm: FormGroup = this.fb.group({
    plateId: ['', Validators.required],
    evaluationDate: ['', Validators.required],
  });

  ngOnInit(): void {}

  onEvaluateRestriction() {}
}
