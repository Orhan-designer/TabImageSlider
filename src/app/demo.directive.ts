import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDemo]'
})
export class DemoDirective {

  constructor(private el: ElementRef) { }

  @HostListener('click')

  onClick() {
    let option = document.getElementsByClassName('option');

    for (let i = 0; i < option.length; i++) {
      option[i].classList.remove('active');
    }

    this.el.nativeElement.classList.add('active');
  }
}
