import { LoaderService } from './loader.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  isLoading$ = this.loaderSrv.isLoading$;

  constructor(private loaderSrv: LoaderService) {}

  ngOnInit(): void {}
}
