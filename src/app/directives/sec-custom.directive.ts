import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appSecCustom]',
  host: {
    '(click)': 'ageFunction()'
  }
})
export class SecCustomDirective implements OnInit {

  constructor(private el: ElementRef) { }

  @Input() titleLength : number = 0;


  ageFunction() {

    const textLimit = this.titleLength > 8;
    if (this.el) {
      this.el.nativeElement.style.color = textLimit ? 'blue' : 'yellow';
    }
  }

  ngOnInit() {


  }



}
