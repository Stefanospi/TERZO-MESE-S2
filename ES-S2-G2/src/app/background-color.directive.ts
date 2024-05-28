import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]'
})
export class BackgroundColorDirective {

  constructor(private ref:ElementRef) { }//accedo all'elemento su cui la direttiva è applicata

  /* FUNZIONE PER COLORE RANDOM */
  setRandomTagColor(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    this.ref.nativeElement.style.backgroundColor = `#${randomColor}`;
    return this.ref;
  }
  ngOnInit(): void {
    this.setRandomTagColor();
  }
}
