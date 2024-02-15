import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appToggleColor]'
})
export class ToggleColorDirective {

  @Input()
  appToggleColor:string;
  
  initialColor:string;

  constructor(private hostElement:ElementRef) { 
    this.appToggleColor="#ffffff";
    this.initialColor=hostElement.nativeElement.style.color;
  }

  @HostListener("mouseover")
  handleMouseOver(){
    this.hostElement.nativeElement.style.color=this.appToggleColor;
  }

  @HostListener("mouseleave")
  handleMouseLeave(){
    this.hostElement.nativeElement.style.color=this.initialColor;
  }
}
