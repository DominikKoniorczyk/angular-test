import { Component, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/internal/operators/filter';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  path = '/';
  btn_text = "Neues Produkt";
  private route = inject(ActivatedRoute);  
  private router = inject(Router);

  url = toSignal(
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map((e: NavigationEnd) => e.urlAfterRedirects)
    ),
    { initialValue: this.router.url }
  );

  constructor() {
    effect(() => {
      const currentPath = this.url();
      if (!currentPath) return;
      this.onPathChanged(currentPath);
    });
  }

  onPathChanged(newPath: string) {
    this.path = newPath;
    if(this.path === "/"){
      this.btn_text = "Neues Produkt";
    } else {
      this.btn_text = "Zurück zur Liste";
    }
  }

  onClick(){
    if(this.path === "/"){
      this.router.navigate(['/addnewproduct']);
    } else {
      this.router.navigate(['/']);
    }
  }
}
