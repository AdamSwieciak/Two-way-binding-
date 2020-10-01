import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-comp',
  templateUrl: './new-comp.component.html',
  styleUrls: ['./new-comp.component.css']
})
export class NewCompComponent implements OnInit {
  pool=''
  newField=''

  constructor() { 
  }
  
  functioncler() {
    this.newField=this.pool
    this.pool=''
  }
  ngOnInit(): void {
  }

}
