import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuateService {
  Quotes:string[] =  [
    "“Be yourself; everyone else is already taken.”",
    "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    "“So many books, so little time.”",
    "“A room without books is like a body without a soul.”",
    "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    "“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.”",
    "“You only live once, but if you do it right, once is enough.”",
    "“Be the change that you wish to see in the world.”",
    "“In three words I can sum up everything I've learned about life: it goes on.”"
];
  constructor() { }
 
getRandom():number
{
    return Math.round(Math.random() *(this.Quotes.length - 1)) ;
}


}
