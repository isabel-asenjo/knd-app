import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ControlWarningModalService} from 'src/app/services/control-warning-modal.service';

@Component({
  selector: 'app-crud-delete',
  templateUrl: './crud-delete.component.html',
  styleUrls: ['./crud-delete.component.scss']
})
export class CrudDeleteComponent implements OnInit {

  controlWarningModalService = ControlWarningModalService;
  display: boolean = false;  
  @Output() onClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  activate(): boolean {
    this.display = true;
    console.log(this.display);
    return this.display;
  }

  click(event) {
    this.onClick.emit(true);
  }

}
