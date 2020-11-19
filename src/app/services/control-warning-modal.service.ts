import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ControlWarningModalService {

  displayed: boolean = false;

  constructor() { }



  activate(open: boolean): boolean {
    if (open){
      this.displayed = true;
      return this.displayed;
    }
    
  }

  deactivate(close: boolean): boolean {
    if (!close){
      this.displayed = false;
      return this.displayed;
    }
  }

}