import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'dynamic-components-dynamic-content-one',
  templateUrl: './dynamic-content-one.component.html',
  styleUrls: ['./dynamic-content-one.component.scss']
})
export class DynamicContentOneComponent implements OnInit {

  @Input() data!:string

  constructor() { }

  ngOnInit(): void {
  }

}
