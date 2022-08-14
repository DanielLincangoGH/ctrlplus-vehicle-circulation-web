import { Restriction } from './../../../circulation/interfaces/restriction';
import { Vehicle } from './../../interfaces/vehicle';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.scss'],
})
export class VehicleDetailComponent implements OnInit {
  @Input() vehicle!: Vehicle;
  @Input() restriction!: Restriction;

  constructor() {}

  ngOnInit(): void {}
}
