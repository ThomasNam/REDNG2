import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { IntroComponent } from './intro/intro.component';

const introRouter: Routes = [
    {path:'', component: IntroComponent}
];

const memberRouter: Routes = [
    {path:'member', loadChildren: 'app/member/member.module#MemberModule'}
];

const appRouter: Routes = [...introRouter, ...memberRouter];

export const appRoutingProviders: any[] = [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
];

@NgModule({
    imports: [RouterModule.forRoot(appRouter)],
    exports: [RouterModule]
})
export class AppRoutingModule {}