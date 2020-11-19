import { Component, Input, OnInit } from '@angular/core';
import {ControlWarningModalService} from 'src/app/services/control-warning-modal.service';


@Component({
  selector: 'app-delete-warning',
  templateUrl: './delete-warning.component.html',
  styleUrls: ['./delete-warning.component.scss']
})
export class DeleteWarningComponent implements OnInit {
  @Input() public parentData;

  controlWarningModalService = ControlWarningModalService;

  constructor() { }

  ngOnInit(): void {
  }

}
