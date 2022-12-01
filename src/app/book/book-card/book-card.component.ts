import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent  implements OnInit{



  @Input() book :Book ={
    title : 'Harry Potter',
    description:`The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
    A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
    bred for hunting.`,
    author:'J.K. Rowling',
    price: 100,
    buyLink:'',
    imageUrl:'https://material.angular.io/assets/img/examples/shiba2.jpg'
    
  }

  @Output() cardClicked =new EventEmitter();



  constructor(){}
  ngOnInit(): void {
    
  }

  goToBuyLink(){
    window.open(this.book.buyLink)
  }
  onCardClicked(){
    this.cardClicked.emit();
    
  }

  

 


  


}
