import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-simple-single-select',
  templateUrl: './simple-single-select.component.html',
  styleUrls: ['./simple-single-select.component.scss']
})
export class SimpleSingleSelectComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6'];
  constructor() { }

  ngOnInit(): void {
  }

}
