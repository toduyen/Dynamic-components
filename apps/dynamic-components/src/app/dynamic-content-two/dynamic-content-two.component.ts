import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'dynamic-components-dynamic-content-two',
  templateUrl: './dynamic-content-two.component.html',
  styleUrls: ['./dynamic-content-two.component.scss']
})
export class DynamicContentTwoComponent implements OnInit {

  @Input() data!:string;

  constructor() { }

  ngOnInit(): void {
  }

}
