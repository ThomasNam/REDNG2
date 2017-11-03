import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChildrenComponent } from './children.component';
import { Child1Component } from './child1.component';
import { Child2Component } from './child2.component';
import { Child3Component } from './child3.component';

@NgModule({
    imports: [RouterModule.forChild([
        {
            path:'children', component: ChildrenComponent,
            children: [
                {path:'', component: Child1Component, children: [
                    {path:'', component: Child2Component},
                    {path:':id', component: Child3Component}
                ]},
                
            ]
        },
        {
            path:'active', component: ChildrenComponent,
            children: [{
                path: '',
                children: [
                    {path:'child1', component: Child1Component},
                    {path:'child2', component: Child3Component},
                    {path:'', component: Child1Component}
                ]
            }]
        }
    ])],
    exports: [RouterModule]
})
export class ChildrenRoutingModule { }