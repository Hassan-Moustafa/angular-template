import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'svg-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss']
})

export class SvgIconComponent {


    @Input()
    protected iconName: string;
    @Input()
    protected styleClassName: string;

    @Output()
    iconClicked = new EventEmitter<void>();

    protected iconSrc: string;

    constructor() {
    }


    onIconClick() {
        this.iconClicked.emit();
    }
}