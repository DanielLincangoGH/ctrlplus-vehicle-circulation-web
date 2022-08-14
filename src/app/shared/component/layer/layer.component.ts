import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layer',
  templateUrl: './layer.component.html',
  styleUrls: ['./layer.component.scss'],
})
export class LayerComponent implements OnInit {
  isExpanded: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
