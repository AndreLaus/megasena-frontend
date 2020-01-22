import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DezenaComponent } from './dezena/dezena.component';
import { DezenasListComponent } from './dezenas-list/dezenas-list.component';
import { DarkenOnHoverModule } from '../shared/directives/darken-on-hover/darken-on-hover.module';

@NgModule({
    declarations: [ 
        DezenaComponent, 
        DezenasListComponent ],
    imports: [ 
        CommonModule
    ],
    exports: [
        DezenasListComponent
    ]
})
export class DezenasModule {}