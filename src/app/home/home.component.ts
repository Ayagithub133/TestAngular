import { Component, OnInit } from '@angular/core';
import { QuateService } from '../Services/quate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  quote : string ='';
  constructor(private _quote: QuateService) { }

  ngOnInit(): void {
  }

displayQuote():void
{
    let index = this._quote.getRandom();
    this.quote = this._quote.Quotes[index];

   
}

}
