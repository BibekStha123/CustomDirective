import { Directive, 
         AfterViewInit,
         ElementRef, 
         Input,
         HostListener } from '@angular/core';

@Directive({
    // selector: '[color]'
    selector: '[appDirective]', //yo use garda html file bata multiple property use garna sakinxa
    //inputs: ['name']// this property is also passed as color from html
})
 
export class AppDirective implements AfterViewInit {

    @Input() color : String;
    //color: String; to use the input like this, inputs: ['color'] needs to be done in directive as done for name
    //name: String; //it is used below

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
        
          //this._ele.nativeElement.innerText = this.name; //the property name from html can be use here
          this._ele.nativeElement.innerText = "this is directive";
        //this._ele.nativeElement.innerText = this.color;  //yedi color directlyl apply garne bhaye
     }
}