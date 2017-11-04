import { Directive, Input, Output, Attribute, HostListener, ElementRef, Renderer, EventEmitter } from '@angular/core';

@Directive({
    selector: '[myDirective]',
})
export class myDirective
{
    _inputValue : string;

    @Input() set inputValue (status:string)
    {
        this._inputValue = status;
    }

    @Output() complete = new EventEmitter<boolean>();

    constructor(@Attribute('staticValue') private staticValue:string)
    {

    }

    @HostListener('click') onMouseClick ()
    {
        alert ("속성 바인딩 값 : " + this._inputValue + "\n속성값 : " + this.staticValue);

        this.complete.emit(true);
    }
}