import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'promise-prototype',
    template: 'promise then, catch ...'
})
export class PromisePrototypeComponent
{
    constructor ()
    {
        var p = new Promise(function (resolve, reject) {
            resolve("성공입니다");
        });

        p.then (function (value) {
            console.log ("then 메서드(이행) : "+ value);
            throw 'fail!';
        }, function (reason) {
            console.log ("then 메서드(실패) : "+ reason);
        }).catch (function (reason) {
            console.log ("catch 메서드 : " + reason);
        });
    }
}