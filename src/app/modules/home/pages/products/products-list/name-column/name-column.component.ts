import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-name-column',
  templateUrl: './name-column.component.html',
  styleUrls: ['./name-column.component.scss']
})
export class NameColumnComponent implements OnInit {

  isEditMode = false;

  @Input()
  value: string;

  @ViewChild('nameField', {static: false}) //nameField: ElementRef;
  set nameField(nameField: ElementRef) {
    if(nameField)
      nameField.nativeElement.focus();
  };
  

  @Output()
  valueChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  toggleMode(){
    this.isEditMode = !this.isEditMode;
  }

  saveValue(){
    if(this.value !== null && this.value.trim() !== ''){
      this.toggleMode();
      this.valueChanged.emit(this.value);
    }
  }

}
