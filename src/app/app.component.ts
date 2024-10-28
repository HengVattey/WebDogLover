import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PropertyComponent } from './property/property.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,FooterComponent,HomeComponent,AboutComponent,PropertyComponent,ContactComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{


  ngOnInit(){
    console.log("Hello");
  }
  constructor(){
    console.log("Work");
    this.hi();
  }

  title = 'Web_For_Dog_Lover';

hi(){
  console.log("yes");
}


}



