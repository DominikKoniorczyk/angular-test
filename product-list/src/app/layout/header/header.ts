import { Component, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  path = "";
  btn_text = "Neues Produkt";
  private route = inject(ActivatedRoute);

  ngOnInit(){
    let currentName = this.route.snapshot.paramMap.get('name'); // Get the 'id' parameter from the route (link: /detail/:id)
    if(currentName) this.path = currentName;
    if(this.path === "detail"){
      this.btn_text = "Zurück zur Liste";
    }
  }
}
