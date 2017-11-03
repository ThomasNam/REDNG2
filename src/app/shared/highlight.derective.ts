import { Directive, ElementRef, HostListener, Input } from '@angular/core'

@Directive({
    selector: '[highlight]'
})
export class HighlightDirective
{
    private el: HTMLElement;

    constructor(el: ElementRef)
    {
        this.el = el.nativeElement;
        this.el.style.fontSize = "30px";
    }

    @HostListener('mousemove') onmousemove()
    {
        this.el.style.backgroundColor = "red";
        this.el.style.color = "white";
    }

    @HostListener('mouseleave') onmouseleave()
    {
        this.el.style.backgroundColor = null;
        this.el.style.color = "black";
    }
}