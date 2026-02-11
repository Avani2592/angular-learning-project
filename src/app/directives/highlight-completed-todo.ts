import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]',
})
export class HighlightCompletedTodo {
  iscompleted = input(false);
  el=inject(ElementRef);
  styleEffects=effect(()=>
  
  {
      if (this.iscompleted()) {
       this.el.nativeElement.style.backgroundColor = 'lightgreen';
        this.el.nativeElement.style.textDecoration = 'line-through';
        this.el.nativeElement.style.color = 'gray';
      }
      else {
        this.el.nativeElement.style.backgroundColor = '';
        this.el.nativeElement.style.textDecoration = '';
        this.el.nativeElement.style.color = '';
      }     
    });


}
