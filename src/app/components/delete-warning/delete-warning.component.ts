import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import {ControlWarningModalService} from 'src/app/services/control-warning-modal.service';
import { ProductsService } from 'src/app/services/products.service';


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
