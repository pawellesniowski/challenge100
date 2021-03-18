import { Component, OnInit } from '@angular/core';
import { FlattenArrPipe } from './flatten-arr.pipe';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss'],
})
export class PipesComponent implements OnInit {
  title = 'hello this is too long sentence';

  nestedArray = [[1], [2, [3], [4, [5, [6]]]], 7]


  constructor(private flattenArrPipe: FlattenArrPipe) {}

  ngOnInit(): void {
    console.log('flattenArrPipe', this.flattenArrPipe.transform);
    console.log('in component flatten: ', this.getFlattenArr());
  }

  getFlattenArr() {
    return this.flattenArrPipe.transform(this.nestedArray)
  }

  modyfyArray() {
    this.nestedArray.push([[1000], [2000]])
  }
}
