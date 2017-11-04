import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'app-sync',
    template: '<p> 중단없는 스트림 출력 : {{second|async}}</p>' + 
        '<p> 50 까지의는 스트림 출력 : {{second_map_take|async}}</p>' +
        '<p>배열 스트림 출력 : {{greeting$ | async}}</p>' + 
        '<select [(ngModel)] = "take">' + 
        '<option value = "1">1</option>' + 
        '<option value = "2">2</option>' + 
        '<option value = "3">3</option>' + 
        '</select>'+
        '<button (click)="asyncCall(take)">비동기 호출</button>'
})
export class AsyncComponent
{
    second = Observable.interval(1000);
    second_map_take = Observable.interval(1000).map(i => i).take(51);
    greeting$: Observable<string>;

    take: number = 1;

    private greetings = ['good morning' ,'good afternoon', 'good night'];

    constructor ()
    {
        this.asyncCall(1);
    }

    asyncCall (num : number)
    {
        this.greeting$ = Observable.interval(100).map(i => this.greetings[i]).take(num);
    }
}