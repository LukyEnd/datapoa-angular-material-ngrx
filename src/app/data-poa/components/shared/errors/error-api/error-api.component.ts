import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-api',
  templateUrl: './error-api.component.html',
  styleUrls: ['./error-api.component.scss'],
})
export class ErrorApiComponent {
  @Input() public busLineError = '';

  constructor(private router: Router) {}

  public pageError(routerReturn: string): void {
    if (routerReturn == 'bus') {
      this.router.navigate(['/bus']);
    } else this.router.navigate(['/minibus']);
  }
}
