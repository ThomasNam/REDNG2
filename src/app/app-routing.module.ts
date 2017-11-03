import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroComponent } from './intro/intro.component';
import { MemberComponent } from './member/member.component';

const appRouter: Routes = [
    {path:'', component: IntroComponent},
    {path:'member', component: MemberComponent}
];


@NgModule({
    imports: [RouterModule.forRoot(appRouter)],
    exports: [RouterModule]
})
export class AppRoutingModule {}