import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appDirective]',
  host: {'(click)': 'directiveLogic()'}
})
export class DirectiveDirective {

  constructor(public el: ElementRef) { }

  @Input() firstName: string = '';
  @Input() lastName: string = '';
  directiveLogic() { 

    const isLarge = this.firstName.length < 5 && this.lastName.length < 8;

    if( this.el ) {
      this.el.nativeElement.style.color = isLarge ? 'red' : 'green';
    }

    console.log("This is Directive", this.el);
    
  }
}
