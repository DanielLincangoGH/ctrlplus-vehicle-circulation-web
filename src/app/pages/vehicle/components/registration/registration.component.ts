import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  registrationForm = this.fb.group({
    plateId: ['', Validators.required],
    color: ['', Validators.required],
    model: ['', Validators.required],
    brand: ['', Validators.required],
    engine: ['', Validators.required],
    chassis: ['', Validators.required],
    manufacturingYear: ['', Validators.required],
  });

  ngOnInit(): void {}
}
