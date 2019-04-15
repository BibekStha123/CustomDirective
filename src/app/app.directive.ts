import { Directive, 
         AfterViewInit,
         ElementRef, 
         Input,
         HostListener } from '@angular/core';

@Directive({
    // selector: '[color]'
    selector: '[appDirective]' //yo use garda html file bata multiple property use garna sakinxa
})
 
export class AppDirective implements AfterViewInit {

    @Input() color : String;

    @HostListener('mouseover') onmouseover(){
        /* this._ele.nativeElement.style.color = this.color;
        this._ele.nativeElement.style.fontStyle= 'italic'; */
        this.highlightColor(this.color, 'italic', '2em');
    }

    @HostListener('mouseout') onmouseout(){
       /*  this ._ele.nativeElement.style.color = null;
        this._ele.nativeElement.style.fontStyle = null; */
        this.highlightColor('','','');
    }

    highlightColor(color, font, size){
        this._ele.nativeElement.style.color = color;
        this._ele.nativeElement.style.fontStyle= font;
        this._ele.nativeElement.style.fontSize= size;
    }

    constructor(private _ele: ElementRef){

    }

     ngAfterViewInit(){
         //console.log("this is from directive")
          this._ele.nativeElement.innerText = "this is from directive";
        //this._ele.nativeElement.innerText = this.color;  //yedi color directlyl apply garne bhaye
     }
}