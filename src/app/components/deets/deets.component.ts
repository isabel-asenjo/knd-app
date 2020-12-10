import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-deets',
  templateUrl: './deets.component.html',
  styleUrls: ['./deets.component.scss']
})
export class DeetsComponent implements OnInit {

  @Input() producto: any = null;
  @Output() cerrar = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
