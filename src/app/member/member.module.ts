import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { MemberComponent } from './member.component';
import { HighlightDirective } from './highlight.derective';
import { MemberService} from './member.service'
import { MemberRoutingModule} from './member-routing.module'
import { ContactComponent } from './contact.component';
import { MyClickDirective } from './myclick.directive';
import { OneDirective } from './one.directive';
import { myDirective } from './my.directive';
import { CustomAttrDirective } from './custom-attr.directive';
import { MyIfDirective } from './myif.directive';
import { AsyncComponent } from './async.component';
import { WikiPromiseComponent } from './wiki.component.promise';
import { PersonListComponent } from './person-list.component'
import { ItemEditComponent } from './item-edit.component'

@NgModule({
    imports: [CommonModule, FormsModule, MemberRoutingModule, ReactiveFormsModule, JsonpModule],
    declarations: [MemberComponent, HighlightDirective, ContactComponent, MyClickDirective, OneDirective, myDirective, CustomAttrDirective, MyIfDirective, AsyncComponent, WikiPromiseComponent, PersonListComponent, ItemEditComponent],
    providers: [MemberService]
})
export class MemberModule {}