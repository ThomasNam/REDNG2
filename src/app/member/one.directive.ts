import { Directive, Input, Attribute, HostListener, ElementRef, Renderer } from '@angular/core';

@Directive({
    selector: '[one]',
    host: {
        '(click)':'onClick()'
    }
})
export class OneDirective
{
    @Input('one') one: string;

    constructor(@Attribute('msg') public msg:string, public el : ElementRef, public renderer : Renderer) 
    {
        renderer.setElementStyle(el.nativeElement, 'background', 'aqua');
        // this.el.nativeElement.style.backgroundColor = 'orange';
    }

    onClick() {
        alert ("Hello - " + this.one + ", msg = " + this.msg);
    }

    @HostListener('mouseover') onMouseOver ()
    {
        console.log ("mouseover");
    }
}