import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "myPipe"
})
export default class MyPipe implements PipeTransform
{
    transform(value, search, newvalue) {
        return value.replace(search, newvalue);
    }
}