import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'mgsn-dezenas-list',
  templateUrl: './dezenas-list.component.html',
  styleUrls: ['./dezenas-list.component.css']
})
export class DezenasListComponent implements OnChanges {
  
  constructor() {}
  
  @Input() dezenas: number[] = [];
  rows: any[] = [];
  
  
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.dezenas) {
      this.rows = this.groupColumns(this.dezenas);
    }
  }

  groupColumns(dezenas: number[]): number[] {
    const newRows = [];

    for(let index=0; index < dezenas.length; index+=6) {
      newRows.push(dezenas.slice(index, index + 6));
    }

    return newRows;
  }
}
