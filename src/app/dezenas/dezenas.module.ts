import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DezenaComponent } from './dezena/dezena.component';
import { DezenasListComponent } from './dezenas-list/dezenas-list.component';

@NgModule({
    declarations: [ 
        DezenaComponent, 
        DezenasListComponent 
    ],
    imports: [ 
        CommonModule
    ],
    exports: [
        DezenaComponent,
        DezenasListComponent
    ]
})
export class DezenasModule {}