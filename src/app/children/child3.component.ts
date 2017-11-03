import { Component } from '@angular/core';

@Component({
    selector: 'child3',
    template: '<div>자식 3</div> <input type="text" [(ngModel)]="editName"> {{editName}}'
})
export class Child3Component 
{
    editName: string;

    
}