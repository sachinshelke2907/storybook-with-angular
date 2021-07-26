import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export   class IconComponent {
  constructor() { }


    /**
     * How large should the button be?
     */
    @Input()
    type: 'outlined' | 'filled'  = 'filled';

    /**
     * Button contents
     *
     * @required
     */
    @Input()
    label: string;

    public get classes(): string[] {
      return [`material-icons-${this.type}`];
    }

}
