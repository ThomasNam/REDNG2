import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberComponent } from './member.component';

@NgModule({
    imports: [RouterModule.forChild([
        {path: 'list', component: MemberComponent}
    ])],
    exports: [RouterModule]
})
export class MemberRoutingModule {}