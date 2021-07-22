import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input()
  buttonType? = 'primary'

  constructor() { }

  ngOnInit(): void {}

  public isPrimary(): boolean {
      return ('primary' == this.buttonType);
  }

  public isSecondary(): boolean {
      return ('secondary' == this.buttonType);
  }

  public isTertiary(): boolean {
      return ('tertiary' == this.buttonType);
  }

 }
