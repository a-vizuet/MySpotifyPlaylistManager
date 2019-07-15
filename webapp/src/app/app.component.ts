import { Component } from '@angular/core';
import { Router, ActivationStart, ActivatedRouteSnapshot } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TokenService } from '@services/token/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  constructor(
    private router: Router,
    private tokenS: TokenService
  ) {
    this.router.events.pipe(
      filter(event => event instanceof ActivationStart)
    ).subscribe((event: ActivationStart) =>
      this.handleRoutes(event.snapshot)
    );
  }

  private handleRoutes(snapshot: ActivatedRouteSnapshot) {
    // Si url es 0 es porque entró a la ruta base '/'
    const isBasePath = snapshot.url.length === 0;

    if (!isBasePath) {
      const code = snapshot.queryParamMap.get('code');
      this.tokenS.getToken(code);
    } else {
      this.tokenS.login();
    }
  }

}
