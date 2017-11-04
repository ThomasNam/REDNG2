import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'contactinput',
    template: '<div><input #contactname type="text" placeholder="이름"></div>' +
        '<div><input #contacttitle type="text" placeholder="전화번호"></div>' +
        '<button (click) = "handleClick(contactname.value, contacttitle.value)">저장</button>'+
        '<div><input type="text" placeholder="테스트" [(ngModel)]="myName"></div>' +
        '<div><input type="text" [(ngModel)]="myName"></div>'
})
export class ContactComponent
{
    myName:string;

    @Output() save : EventEmitter<any> = new EventEmitter();

    public handleClick(name:string, tele:string) : void {
        this.save.emit({name: name, telephone:tele});
    }
}