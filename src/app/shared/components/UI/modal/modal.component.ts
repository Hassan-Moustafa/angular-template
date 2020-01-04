import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { environment } from '../../../../../environments/environment.prod';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Output()
  onModalClose = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  closeModal() {
    this.onModalClose.emit();
  }

}
