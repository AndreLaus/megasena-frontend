import { Component, Input } from '@angular/core';

@Component({
    selector: 'mgsn-dezena',
    templateUrl: 'dezena.component.html',
    styleUrls: ['dezena.component.css']
})
export class DezenaComponent {
    @Input() dezena='';
}