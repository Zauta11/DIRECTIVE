import { ContentChild, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appSec]',
  
})

export class SecDirective {

  constructor(public el: ElementRef) { }

}


@Directive({

  selector: '[appThird]',
})

export class ThirdDirective {
  constructor(public el: ElementRef) {}
}

@Directive({
  selector: '[appMain]',
  host: {
    '(click)' : 'mainDirective()'
  }
})
export class MainDirective {

  constructor(private el: ElementRef) { }

  @Input() ages : number = 0;
  @Input() name : string = '';
  @Input() surname: string = '';

  @ContentChild(SecDirective) newOne ?: SecDirective;
  @ContentChild (ThirdDirective) Third ?: ThirdDirective;

  mainDirective() {
    const Under = this.ages > 18;

    if(this.el) {
      this.el.nativeElement.style.color = Under ? "green" : "red";
    }

    const NameLength = this.name.length > 5;
    if(this.newOne) {
      this.newOne.el.nativeElement.style.color = NameLength ? "green" : "red";
    }

    const surn = this.surname.length > 8;
    if(this.Third) {
      this.Third.el.nativeElement.style.color = surn ? "green" : "red";
    }
    

  }

  ngAfterViewInit () {
    console.log(this.newOne);
  }

}
