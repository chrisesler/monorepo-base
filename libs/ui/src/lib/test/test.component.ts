import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cesler-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
