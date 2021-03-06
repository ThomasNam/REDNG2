import { Directive, Input, Output, Attribute, HostListener, ElementRef, Renderer, EventEmitter } from '@angular/core';

@Directive({
    selector: '[mystyle]',
})
export class CustomAttrDirective
{
    private el : HTMLElement;

    constructor(el: ElementRef)
    {
        this.el = el.nativeElement;

        this.el.style.padding = "10px";
    }

    @Input('mystyle') myBackground: string;

    @Input() set myfontsize(status:string)
    {
        this.el.style.fontSize = status;
    }

    @HostListener('mouseenter')  onMouseEnter ()
    {
        this.el.style.backgroundColor = this.myBackground;
    }

    @HostListener('mouseleave') onmouseleave()
    {
        this.el.style.backgroundColor = null;
    }
}