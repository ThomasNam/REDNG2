import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightDirective } from './highlight.derective';
import { MyUpperPipe } from './my-upper.pipe'

@NgModule({
    imports: [CommonModule ],
    declarations: [HighlightDirective, MyUpperPipe],
    exports: [HighlightDirective, MyUpperPipe]
})
export class SharedModule {}