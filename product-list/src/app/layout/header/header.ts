import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  path = "detail";
  btn_text = "Neues Produkt";
  ngOnInit(){
    this.path = " ";

    if(this.path === "detail"){
      this.btn_text = "Zurück zur Liste";
    }
  }
}
