import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ChildrenComponent } from './children.component';
import { Child1Component } from './child1.component';
import { Child2Component } from './child2.component';
import { Child3Component } from './child3.component';

import { ChildrenRoutingModule } from './children-routing.module';


@NgModule({
    imports: [CommonModule, FormsModule, ChildrenRoutingModule],
    declarations: [ChildrenComponent, Child1Component, Child2Component, Child3Component],
})
export class ChildModule {}