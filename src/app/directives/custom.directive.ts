import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustom]',

  host: {
    '(click)': 'customFunction()'
  }
})
export class CustomDirective {


  @Input() number1 : number = 0;
  @Input() number2 : number = 0;

  constructor(private el: ElementRef) { }

  customFunction () {

    if(this.el) {
        const devide = this.number1 > 18;
        this.el.nativeElement.style.color = devide ? 'green' : 'red';
      }

  }

}
