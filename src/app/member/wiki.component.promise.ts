import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { WikiService } from './wiki.service.promise'

@Component({
    selector: 'wiki-promise-cmp',
    template: `
        <h3>Json By Observable</h3>
        <input #keyword (keyup)="search(keyword.value)" />

        <ul>
            <li *ngFor = "let item of items | async">{{item}}</li>
        </ul>

        <h3>Json By Observable (with Operator)</h3>
        <input #keyword2 (keyup)="searchOperator(keyword2.value)" />

        <ul>
            <li *ngFor = "let item of itemsOperator | async">{{item}}</li>
        </ul>
    `,
    providers: [WikiService]
})
export class WikiPromiseComponent
{
    items: Observable<string[]>;
    itemsOperator: Observable<string[]>;

    constructor(private wikiService: WikiService) 
    {
        this.itemsOperator = this.searchKeyStream
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap((keyword:string) => this.wikiService.search(keyword));
    }

    searchOperator(keyword: string)
    {
        this.searchKeyStream.next (keyword);
    }

    search (keyword: string)
    {
        this.items = this.wikiService.search(keyword);
    }

    private searchKeyStream = new Subject<string> ();


}