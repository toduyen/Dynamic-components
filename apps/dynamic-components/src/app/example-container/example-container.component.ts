import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
@Component({
  selector: 'dynamic-components-example-container',
  templateUrl: './example-container.component.html',
  styleUrls: ['./example-container.component.scss']
})
export class ExampleContainerComponent implements OnInit {

  @ViewChild('dynamicComponent',{read: ViewContainerRef}) contrainerRef!: ViewContainerRef;
  constructor(private  cfr: ComponentFactoryResolver) {}

  ngOnInit(): void {
  }

  async addDynamicCompOne(){
    // ivy add function
    const {DynamicContentOneComponent} = await import('../dynamic-content-one/dynamic-content-one.component');
    const compFactory = this.cfr?.resolveComponentFactory(DynamicContentOneComponent);
    const componentsRef = this.contrainerRef?.createComponent(compFactory);
    componentsRef.instance.data = "input data 1"
  }
  async addDynamicCompTwo(){
    // ivy add function
    const {DynamicContentTwoComponent} = await import('../dynamic-content-two/dynamic-content-two.component');
    const componentFactory = this.cfr?.resolveComponentFactory(DynamicContentTwoComponent);
    const componentRef = this.contrainerRef?.createComponent(componentFactory);
    componentRef.instance.data = "input data 2"
  }
  clearDynamic(){
    this.contrainerRef.clear()
  }
}
