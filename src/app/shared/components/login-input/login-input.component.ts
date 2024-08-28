import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-input',
  templateUrl: './login-input.component.html',
  styleUrls: ['./login-input.component.scss'],
})
export class LoginInputComponent  implements OnInit {

  @Input() control!:FormControl;
  @Input() this!: string;
  @Input() label!: string;
  @Input() autocomplete!: string;
  @Input() icon!: string;

  constructor() { }

  ngOnInit() {}

}
