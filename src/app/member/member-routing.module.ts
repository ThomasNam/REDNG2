import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberComponent } from './member.component';
import { PersonListComponent } from './person-list.component'

@NgModule({
    imports: [RouterModule.forChild([
        {path: 'list', component: MemberComponent},
        {path: 'person', component: PersonListComponent},
    ])],
    exports: [RouterModule]
})
export class MemberRoutingModule {}