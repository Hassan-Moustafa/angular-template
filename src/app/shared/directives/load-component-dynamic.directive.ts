import { Directive, ViewContainerRef, Input, ComponentFactoryResolver, OnInit } from '@angular/core';

@Directive({
  selector: '[appLoadComponentDynamic]'
})
export class LoadComponentDynamicDirective implements OnInit{

  @Input() code: string;
  @Input() item: any;
  @Input() column: any;

  constructor(public viewContainerRef: ViewContainerRef,
              private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    const componentFactory =
                      this.componentFactoryResolver.resolveComponentFactory(this.column.component);
    this.viewContainerRef.clear();
    const componentRef = this.viewContainerRef.createComponent(componentFactory);
    if (this.column.props) {
      this.column.props.forEach(prop => {
        (componentRef.instance as any)[prop.propName] = prop.propValue ? this.item[prop.propValue] : prop.default;
      });
    }
    if (this.column.events) {
      this.column.events.forEach(event => {
        (componentRef.instance as any)[event.eventName].subscribe((e) => event.eventHandler({
          event: e,
          item: this.item
        }));
      });
    }
  }
}
