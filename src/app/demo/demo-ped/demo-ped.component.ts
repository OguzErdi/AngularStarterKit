import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-ped',
  templateUrl: './demo-ped.component.html',
  styleUrls: ['./demo-ped.component.scss']
})
export class DemoPedComponent implements OnInit {
  hero: any = { name: '' };
  patterns: any = [
    { regex: '.', errorMessage: 'Bu alan zorunludur.' },
    { regex: '.{6,}', errorMessage: 'En az 6 karakter giriniz.' },
    { regex: '.{10,}', errorMessage: 'En az 10 karakter giriniz.' }
  ];

  constructor() {}

  ngOnInit() {}
}
