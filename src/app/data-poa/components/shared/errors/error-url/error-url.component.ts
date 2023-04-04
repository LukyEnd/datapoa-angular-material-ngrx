import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-url',
  templateUrl: './error-url.component.html',
  styleUrls: ['./error-url.component.scss'],
})
export class ErrorUrlComponent {
  constructor(private router: Router) {}

  public pageError(routerReturn: string): void {
    if (routerReturn == 'bus') {
      this.router.navigate(['/bus']);
    } else this.router.navigate(['/minibus']);
  }
}
