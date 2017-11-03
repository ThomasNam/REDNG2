import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroComponent } from './intro/intro.component';

const appRouter: Routes = [
    {path:'', component: IntroComponent},
    {path:'member', loadChildren: 'app/member/member.module#MemberModule'}
];

@NgModule({
    imports: [RouterModule.forRoot(appRouter)],
    exports: [RouterModule]
})
export class AppRoutingModule {}