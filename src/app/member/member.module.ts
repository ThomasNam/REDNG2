import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MemberComponent } from './member.component';
import { HighlightDirective } from './highlight.derective';
import { MemberService} from './member.service'
import { MemberRoutingModule} from './member-routing.module'

@NgModule({
    imports: [CommonModule, FormsModule, MemberRoutingModule],
    declarations: [MemberComponent, HighlightDirective],
    providers: [MemberService]
})
export class MemberModule {}